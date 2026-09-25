import axios, { isAxiosError, RawAxiosRequestHeaders } from 'axios';

const fse = require('fs-extra');

interface EnvConfig {
    keycloakBaseUrl: string;
    gatewayServer: string;
    clientId: string;
    grantType?: string;
    username?: string;
    password?: string;
    clientSecret: string;
    realm: string;
    tenant: string;
}

interface CliArgs {
    directoryName?: string;
    useCaseConfigId?: string;
    realms: string[];
}

interface UpdateResult {
    ok: boolean;
    realm: string;
    tenant: string;
    useCaseConfigId: string;
}

const parseCsv = (value: string) =>
    value
        .split(',')
        .map((token) => token.trim())
        .filter((token) => token.length > 0);

const parseArgs = (argv: string[]): CliArgs => {
    const args: CliArgs = { realms: [] };

    for (const arg of argv) {
        if (arg.startsWith('--directoryName=')) {
            args.directoryName = arg.slice('--directoryName='.length).trim();
            continue;
        }

        if (arg.startsWith('--useCaseConfigId=')) {
            args.useCaseConfigId = arg.slice('--useCaseConfigId='.length).trim();
            continue;
        }

        if (arg.startsWith('--realms=')) {
            args.realms = parseCsv(arg.slice('--realms='.length));
        }
    }

    return args;
};

const loadTargets = (): EnvConfig[] => {
    const raw = process.env.BLUEPRINT_UPDATE_REALM_CONFIG;

    if (!raw) {
        console.error('BLUEPRINT_UPDATE_REALM_CONFIG is missing');
        process.exit(1);
    }

    let parsed: unknown;
    try {
        parsed = JSON.parse(raw);
    } catch {
        console.error('BLUEPRINT_UPDATE_REALM_CONFIG is not valid JSON');
        process.exit(1);
    }

    if (Array.isArray(parsed)) {
        return parsed as EnvConfig[];
    }

    if (parsed && typeof parsed === 'object') {
        return [parsed as EnvConfig];
    }

    console.error('BLUEPRINT_UPDATE_REALM_CONFIG must be a JSON object or array');
    process.exit(1);
};

const listAvailableRealms = (targets: EnvConfig[]) => {
    for (const target of targets) {
        console.error(`  - ${target.realm}`);
    }
};

const selectTargets = (targets: EnvConfig[], realmSelectors: string[]): EnvConfig[] => {
    if (realmSelectors.length === 0) {
        console.error('Missing --realms=<realm>,...');
        process.exit(1);
    }

    const selected: EnvConfig[] = [];

    for (const selector of realmSelectors) {
        const match = targets.find((target) => target.realm === selector);

        if (!match) {
            console.error(`No realm matching "${selector}". Available:`);
            listAvailableRealms(targets);
            process.exit(1);
        }

        selected.push(match);
    }

    return selected;
};

const getKeycloakToken = async (realmConfig: EnvConfig) => {
    if (!realmConfig.clientId) {
        console.error(`Realm config error for ${realmConfig.realm}, check environment variables`);
        return;
    }

    const params = new URLSearchParams({
        grant_type: realmConfig.grantType ?? 'password',
        client_id: realmConfig.clientId,
        client_secret: realmConfig.clientSecret ?? '',
        username: realmConfig.username ?? '',
        password: realmConfig.password ?? '',
    });

    try {
        const keycloakResponse = await axios.post(
            `${realmConfig.keycloakBaseUrl}/auth/realms/${realmConfig.realm}/protocol/openid-connect/token`,
            params.toString(),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        );

        if (!keycloakResponse.data.access_token) {
            console.log(keycloakResponse.data);
            return;
        }

        return keycloakResponse.data.access_token as string;
    } catch (error) {
        console.log(error);
    }
};

const updateTarget = async (
    realmConfig: EnvConfig,
    useCaseConfigId: string,
    blueprint: unknown
): Promise<UpdateResult> => {
    const result: UpdateResult = {
        ok: false,
        realm: realmConfig.realm,
        tenant: realmConfig.tenant,
        useCaseConfigId,
    };

    if (!realmConfig.clientId) {
        console.error(`Realm config error for ${realmConfig.realm}, check environment variables`);
        return result;
    }

    const accessToken = await getKeycloakToken(realmConfig);

    if (!accessToken) {
        console.error(`Could not get access token for realm ${realmConfig.realm}`);
        return result;
    }

    const headers: RawAxiosRequestHeaders = {
        Authorization: `Bearer ${accessToken}`,
        Link: `<${process.env.LINK_CONTEXT_URI}>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"`,
        'NGSILD-Tenant': realmConfig.tenant,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.patch(
            `${realmConfig.gatewayServer}/ngsi-ld/v1/entities/${useCaseConfigId}`,
            {
                blueprint: {
                    type: 'JsonProperty',
                    json: blueprint,
                },
            },
            {
                headers,
            }
        );

        if (response.status === 204) {
            console.log(`Use case config ${useCaseConfigId} updated successfully on ${realmConfig.realm}`);
            result.ok = true;
        }
    } catch (error) {
        console.log(`Error - Could not update use case config ${useCaseConfigId} on ${realmConfig.realm}`);
        if (isAxiosError(error)) {
            console.log(error.response?.data);
        }
    }

    return result;
};

const updateUseCaseConfig = async () => {
    const args = parseArgs(process.argv.slice(2));
    const directoryName = args.directoryName;
    const useCaseConfigId = args.useCaseConfigId;

    if (!directoryName) {
        console.error('Missing --directoryName=<use-case-folder>');
        process.exit(1);
    }

    if (!useCaseConfigId) {
        console.error('Missing --useCaseConfigId=<urn>');
        process.exit(1);
    }

    console.log({ usecaseDirectoryName: directoryName, useCaseConfigId, realms: args.realms });

    const selectedTargets = selectTargets(await loadTargets(), args.realms);
    const blueprintPath = `./src/usecases/${directoryName}/blueprint.json`;

    let data: string;
    try {
        data = await fse.readFile(blueprintPath, 'utf8');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    const blueprint = JSON.parse(data);
    const results: UpdateResult[] = [];

    for (const target of selectedTargets) {
        console.log(`Updating ${target.realm} (${useCaseConfigId})...`);
        results.push(await updateTarget(target, useCaseConfigId, blueprint));
    }

    console.log('\nSummary:');
    for (const result of results) {
        const status = result.ok ? 'ok' : 'failed';
        console.log(`${status}  ${result.realm}  ${result.useCaseConfigId}`);
    }

    if (results.some((result) => !result.ok)) {
        process.exit(1);
    }
};

updateUseCaseConfig().catch((error) => {
    console.error(error);
    process.exit(1);
});

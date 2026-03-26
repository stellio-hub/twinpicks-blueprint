import axios, { isAxiosError, RawAxiosRequestHeaders } from 'axios';

const fse = require('fs-extra');

interface EnvConfig {
    keycloakBaseUrl: string;
    gatewayServer: string;
    clientId: string;
    grantType: string;
    username: string;
    password: string;
    clientSecret: string;
    realm: string;
    tenant: string;
    useCaseConfigId: string;
}

const getKeycloakToken = async (realmConfig?: EnvConfig) => {
    if (!realmConfig?.clientId) return process.stdout.write('Realm config error, check environment variables');

    let accessToken = '';

    const params = new URLSearchParams({
        grant_type: realmConfig.grantType ?? 'password',
        client_id: realmConfig.clientId,
        client_secret: realmConfig.clientSecret,
        username: realmConfig.username,
        password: realmConfig.password,
    });

    try {
        const keycloakResponse = await axios.post(
            `${realmConfig.keycloakBaseUrl}/auth/realms/${realmConfig.realm}/protocol/openid-connect/token`,
            params.toString(),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        );

        if (!keycloakResponse.data.access_token) return console.log(keycloakResponse.data);

        accessToken = keycloakResponse.data.access_token;
    } catch (error) {
        console.log(error);
    }

    return accessToken;
};

const updateUseCaseConfig = async (realmConfig?: EnvConfig) => {
    const usecaseDirectoryName = process.argv[2] && process.argv[2].split('=')[1]?.trim();
    console.log({ usecaseDirectoryName });

    if (!realmConfig?.clientId) return process.stdout.write('Realm config error, check environment variables');

    fse.readFile(`./src/usecases/${usecaseDirectoryName}/blueprint.json`, 'utf8', async (err: any, data: string) => {
        if (err) return console.error(err);

        const accessToken = await getKeycloakToken(realmConfig);
        const headers: RawAxiosRequestHeaders = {
            Authorization: `Bearer ${accessToken || 'token not found'}`,
            Link: `<${process.env.LINK_CONTEXT_URI}>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"`,
            'NGSILD-Tenant': realmConfig.tenant,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.patch(
                `${realmConfig.gatewayServer}/ngsi-ld/v1/entities/${realmConfig.useCaseConfigId}`,
                {
                    blueprint: {
                        type: 'JsonProperty',
                        json: JSON.parse(data),
                    },
                },
                {
                    headers,
                }
            );

            if (response.status === 204) {
                console.log(`Use case config ${realmConfig.useCaseConfigId} updated successfully`);
            }
        } catch (error) {
            console.log('Error - Could not update use case config');
            if (isAxiosError(error)) {
                console.log(error.response?.data);
            }
        }
    });
};

const parsed = JSON.parse(process.env.BLUEPRINT_UPDATE_REALM_CONFIG ?? '');

updateUseCaseConfig(parsed);

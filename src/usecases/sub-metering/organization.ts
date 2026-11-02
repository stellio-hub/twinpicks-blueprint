import { StellioTemplate } from 'src/interfaces';
import { getEnumProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'Organization';

/** Same type as energy-finances (D12). Roles optional here: a re-billed company has none of them. */
export const OrganizationTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: "Nom de l'organisation", friendlyAttributeName: 'Nom' }),
    },
    roles: {
        ...getEnumProp({
            title: 'Rôles',
            enum: ['supplier', 'distributor', 'client', 'buyer'],
            allowMultiple: true,
        }),
    },
    siren: {
        ...getSimpleTextProp({ title: 'SIREN', pattern: '^[0-9]{9}$' }),
    },
    siret: {
        ...getSimpleTextProp({ title: 'SIRET', pattern: '^[0-9]{14}$' }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Organisation',
            required: ['name'],
            description: 'Organisation à qui des consommations sont refacturées (occupant, concessionnaire…).',
            minimum: 0,
        },
    },
};

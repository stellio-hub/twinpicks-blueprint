import { StellioTemplate } from 'src/interfaces';
import { getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'Usage';

export const UsageTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: "Nom de l'usage", friendlyAttributeName: 'Nom' }),
    },
    code: {
        ...getSimpleTextProp({ title: "Code de l'usage" }),
    },
    nomenclatureSource: {
        ...getSimpleTextProp({ title: 'Source de nomenclature' }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Usage',
            required: ['name', 'code'],
            description: "Usage d'un bâtiment ou d'un asset, issu d'une nomenclature de référence.",
            minimum: 0,
            identifier: 'code',
        },
    },
};

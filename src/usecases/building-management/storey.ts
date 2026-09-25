import { StellioTemplate } from 'src/interfaces';
import { getIntegerProp, getRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'Storey';

export const StoreyTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description' }),
    },
    level: {
        ...getIntegerProp({ title: 'Niveau' }),
    },
    isPartOf: {
        ...getRelationshipProp({
            formLabel: 'Appartient au bâtiment',
            targetTemplateObjectId: 'urn:ngsi-ld:Building:Template',
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Niveau',
            required: ['name', 'isPartOf'],
            minimum: 0,
            description: "Représente un étage d'un bâtiment",
        },
    },
};

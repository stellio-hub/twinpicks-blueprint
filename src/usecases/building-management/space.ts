import { StellioTemplate } from 'src/interfaces';
import { getSimpleTextProp, getEnumProp } from '../../utils/blueprintHelpers';

const entityType = 'Space';

export const SpaceTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Space:Template',
    type: 'Template',
        name: {
        ...getSimpleTextProp({ title: `Nom de l'espace`, friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: `Description de l'espace` }),
    },

    spaceType: {
        ...getEnumProp({
            title: `Type d'espace`,
            enum: [`Espace`, `Pièce`, `Local`],
        }),
    },
    isContainedIn: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Building:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Bâtiment auquel appartient l'espace`,
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Space',
            title: 'Espace',
            minimum: 1,
            required: ['name', 'isContainedIn'],
            description: `Jumeau numérique de l'espace au sein du bâtiment`,
        },
    },
};

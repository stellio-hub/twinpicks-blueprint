import { StellioTemplate } from 'src/interfaces';
import { getSimpleTextProp, getEnumProp, getRelationshipProp } from '../../utils/blueprintHelpers';

const entityType = 'Space';

export const SpaceTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
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
        ...getRelationshipProp({
            formLabel: "Bâtiment auquel appartient l'espace",
            targetTemplateObjectId: 'urn:ngsi-ld:Building:Template',
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Espace',
            minimum: 1,
            required: ['name', 'isContainedIn'],
            description: `Jumeau numérique de l'espace au sein du bâtiment`,
        },
    },
};

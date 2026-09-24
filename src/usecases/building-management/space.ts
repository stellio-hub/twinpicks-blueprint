import { StellioTemplate } from 'src/interfaces';
import {
    getSimpleTextProp,
    getEnumProp,
    getRelationshipProp,
    getMultiRelationshipProp,
} from '../../utils/blueprintHelpers';

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
    isPartOf: {
        ...getMultiRelationshipProp({
            formLabel: "Niveaux de l'espace",
            formLabelPerItem: 'Choisir un niveau',
            targetTemplateObjectId: 'urn:ngsi-ld:Storey:Template',
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Espace',
            minimum: 1,
            required: ['name', 'isPartOf'],
            description: `Jumeau numérique de l'espace au sein du bâtiment`,
        },
    },
};

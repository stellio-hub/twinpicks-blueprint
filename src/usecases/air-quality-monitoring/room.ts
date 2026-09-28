import { StellioTemplate } from 'src/interfaces';
import { getRelationshipProp } from '../../utils/blueprintHelpers';

export const RoomTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Room:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom de la pièce',
            },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Description de la pièce',
            },
        },
    },
    isContainedIn: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Building:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Bâtiment auquel appartient la pièce',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasSchedule: {
        ...getRelationshipProp({
            formLabel: 'Planning de présence hebdomadaire de la pièce',
            targetTemplateObjectId: 'urn:ngsi-ld:WeeklySchedule:Template',
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Room',
            title: 'Pièce',
            minimum: 1,
            required: ['name', 'isContainedIn'],
            description: 'Jumeau numérique de la pièce au sein du bâtiment, et où se situe le capteur',
        },
    },
};

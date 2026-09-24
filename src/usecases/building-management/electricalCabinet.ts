import { StellioTemplate } from 'src/interfaces';
import { getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'ElectricalCabinet';

export const ElectricalCabinetTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: `Nom de l'armoire électrique`, friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description' }),
    },
    ElectricalCabinetId: {
        ...getSimpleTextProp({ title: `Identifiant de l'armoire électrique'` }),
    },
    
    isFedBy: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:DeliveryPoint:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Est alimentée par: ",
                listOfAllowedRelationships: ['urn:ngsi-ld:DeliveryPoint:Template', 'urn:ngsi-ld:ElectricalCabinet:Template'],
            },
        },
    },
    isContainedIn: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Space:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Local dans lequel est située l'armoire électrique",
                listOfAllowedRelationships: ['urn:ngsi-ld:Space:Template'],
            },
        },
    },
    hasConnectivityNode: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ConnectivityNode:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Points de sortie électrique",
                listOfAllowedRelationships: ['urn:ngsi-ld:ConnectivityNode:Template'],
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Armoire électrique',
            required: ['name', 'isContainedIn'],
            description: `Armoire électrique contenant des sorties électriques`,
            minimum: 0,
            identifier: 'name',
        },
    },
};

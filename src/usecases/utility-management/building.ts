import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getMultiRelationshipProp, getRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'Building';

export const BuildingTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom du bâtiment', friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description' }),
    },
    location: {
        ...getGeoPropertyProp('Sélectionner le bâtiment sur la carte', 'Polygon'),
    },
    rnb: {
        type: 'JsonProperty',
        json: '{}',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'json',
                canSelfInit: true,
                friendlyAttributeName: 'Référentiel National des Bâtiments',
            },
        },
    },
    isContainedIn: {
        ...getRelationshipProp('Site auquel appartient le bâtiment', 'urn:ngsi-ld:Site:Template'),
    },
    hasUsage: {
        ...getMultiRelationshipProp({
            formLabel: 'Usages du bâtiment',
            formLabelPerItem: 'Sélectionner un usage',
            templateObjectId: 'urn:ngsi-ld:Usage:Template',
            minimum: 0,
        }),
    },
    hasDeliveryPoint: {
        ...getMultiRelationshipProp({
            formLabel: 'Points de livraison',
            formLabelPerItem: 'Sélectionner un point de livraison',
            templateObjectId: 'urn:ngsi-ld:DeliveryPoint:Template',
            minimum: 0,
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Bâtiment',
            required: ['name', 'location', 'isContainedIn'],
            description: 'Bâtiment ou asset rattaché à un site, identifié via le Référentiel National des Bâtiments.',
            minimum: 0,
            identifier: 'name',
        },
    },
};

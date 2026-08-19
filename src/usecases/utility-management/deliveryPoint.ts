import { StellioTemplate } from 'src/interfaces';
import { getEnumProp, getGeoPropertyProp, getRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'DeliveryPoint';

export const DeliveryPointTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom du point de livraison', friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description' }),
    },
    deliveryPointNumber: {
        ...getSimpleTextProp({ title: 'Identifiant du point de livraison' }),
    },
    fluidType: {
        ...getEnumProp({
            title: 'Type de fluide',
            enum: ['Eau', 'Gaz', 'Electricité'],
        }),
    },
    location: {
        ...getGeoPropertyProp('Localisation', 'Point'),
    },
    isObserving: {
        ...getRelationshipProp("Est en train d'observer", 'urn:ngsi-ld:StreetlightControlCabinet:Template'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Point de livraison',
            required: ['name', 'deliveryPointNumber', 'fluidType', 'location'],
            description: `Point de livraison regroupant le type d'énergie, les données du distributeur et celles du fournisseur.`,
            minimum: 0,
            identifier: 'deliveryPointNumber',
        },
    },
};

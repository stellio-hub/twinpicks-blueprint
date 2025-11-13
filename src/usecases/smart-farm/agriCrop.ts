import { StellioTemplate } from 'src/interfaces';

export const agriCropTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Crop:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    placement: {
        type: 'GeoProperty',
        value: {
            type: 'Point',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Place a point on the map',
                friendlyAttributeName: 'Geolocation',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Crop",
            title: "Crop",
            minimum: 1,
            required: ['name', 'placement'],
            description: `This represents a Crop`,
        },  
    }
};
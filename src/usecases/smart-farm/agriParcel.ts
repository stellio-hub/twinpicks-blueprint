import { StellioTemplate } from 'src/interfaces';

export const agriParcelTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Parcel:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Polygon',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Draw a Polygone on the map',
                friendlyAttributeName: 'Geolocation',
            },
        },
    },
    hasWeatherInformation: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:WeatherInformation:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "what's the weather above this Plote ?",
                friendlyAttributeName: 'Reference Weather information',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasParcelArea: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ParcelArea:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "what zones thos this plot devide into ?",
                friendlyAttributeName: 'Reference area',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:ParcelArea:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a area"
                        }
                    }
                }
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Parcel",
            title: "Parcel",
            minimum: 1,
            required: ['name', 'location'],
            description: `This represents a field`,
        },
    },
};
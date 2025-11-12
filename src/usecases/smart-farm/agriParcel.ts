import { StellioTemplate } from 'src/interfaces';

export const agriParcelTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Parcel:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'LineString',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Dessiner et suivre la voie sur la carte',
                friendlyAttributeName: 'Géolocalisation',
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
                title: "Quelle est la Météo de référence pour cette Parcel ?",
                friendlyAttributeName: 'Météo de référence',
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
                title: "Quelle est la Zone de référence pour cette Parcel ?",
                friendlyAttributeName: 'Zone de référence',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:ParcelArea:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a place"
                        }
                    }
                }
            },
        },
    },
    collectedAsset:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:Device:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "what devices are placed on this Parcel ?",
                friendlyAttributeName: 'Zone de référence',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Device:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a Device"
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
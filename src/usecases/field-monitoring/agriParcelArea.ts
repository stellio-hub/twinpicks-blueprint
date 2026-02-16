import { StellioTemplate } from 'src/interfaces';

export const agriParcelAreaTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:ParcelArea:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    yield: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Total Yield (mg/ha)' },
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
                friendlyAttributeName: 'Geolacation',
            },
        },
    },
    hasCrops: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Crop:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "What is growing in this area ?",
                friendlyAttributeName: 'Reference crop',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Crop:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a crop"
                        }
                    }
                }
            },
        },
    },
    hasWeeds: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Weed:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "What is growing in this area ?",
                friendlyAttributeName: 'Reference weed',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Weed:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a weed"
                        }
                    }
                }
            },
        },
    },
    hasReferenceSoilArea: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ReferenceSoilArea:Template',
        jsonSchema: {
            type: 'Property',
            value: {
            schemaType: 'string',
            format: 'uri',
            title: 'Sensor and reference soil for the management zone',
            friendlyAttributeName: 'Reference soil area',
            },
        },
    },
    
    hasTreatment: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Treatment:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "What treatment has been used in this area ?",
                friendlyAttributeName: 'Reference treatment',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Treatment:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a treatment"
                        }
                    }
                }
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "ParcelArea",
            title: "Parcel Area",
            minimum: 0,
            required: ['name', 'location'],
            description: `This represents a Parcel Area`,
        },
    },
};
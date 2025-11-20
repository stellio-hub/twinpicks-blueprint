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
    hasSample: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Sample:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "Samples collected from this area?",
                friendlyAttributeName: 'Reference Sample ',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Sample:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a sample"
                        }
                    }
                }
            },
        },
    },
    hasCampaign: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Campaign:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "WhatCampaigns are implemented on this area ?",
                friendlyAttributeName: 'Reference Campaign',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasAgronomicPractices: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:AgronomicPractices:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "What practices are used on this area of the plot?",
                friendlyAttributeName: 'Reference practices',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasAnalysis:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:Analysis:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "What analyse are carried out on this area of the plot?",
                friendlyAttributeName: 'Reference analyse',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "ParcelArea",
            title: "Parcel Area",
            minimum: 1,
            required: ['name', 'location'],
            description: `This represents a Parcel Area`,
        },
    },
};
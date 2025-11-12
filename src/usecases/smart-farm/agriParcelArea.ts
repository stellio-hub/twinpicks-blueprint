import { StellioTemplate } from 'src/interfaces';

export const agriParcelAreaTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:ParcelArea:Template`,
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
    hasCrops: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Crop:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "Quelles Cultures sont sur cette Zone de Parcel ?",
                friendlyAttributeName: 'Cultures de référence',
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
                title: "échantillon pris de la Zone de Parcel ?",
                friendlyAttributeName: 'échantillon de référence',
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
                title: "Quelles Campagne sont executer sur cette Zone de Parcel ?",
                friendlyAttributeName: 'Campagne de référence',
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
                title: "Quelles Pratique sont sur cette Zone de Parcel ?",
                friendlyAttributeName: 'Pratique de référence',
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
                title: "Quelles analyse sont faite sur cette Zone de Parcel ?",
                friendlyAttributeName: 'Analise de référence',
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
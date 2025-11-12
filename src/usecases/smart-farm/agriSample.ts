import { StellioTemplate } from 'src/interfaces';

export const agriSampleTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Sample:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    }, 
    treatment_type: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Treatment Type' },
        },
    }, 
    sampling_date: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'datatime', title: 'Dampling Date' },
        },
    }, 
    sampleEnvironmentalResults: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:EnvironmentalResults:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "Resultat des échantillon ?",
                friendlyAttributeName: 'Resultat de référence',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:EnvironmentalResults:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a result"
                        }
                    }
                }
            },
        },
    },
    sampleBiologicalResults: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:BiologicalResults:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "Resultat des échantillon ?",
                friendlyAttributeName: 'Resultat de référence',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:BiologicalResults:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a result"
                        }
                    }
                }
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Sample",
            title: "Sample",
            minimum: 1,
            required: ['name', 'treatment_type','sampling_date'],
            description: `This represents a Sample`,
        },
    },
};
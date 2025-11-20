import { StellioTemplate } from 'src/interfaces';



export const agriSampleTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Sample:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    }, 
    samplingDate: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'date', title: 'Sampling Date' },
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
                title: "what environmental results are taken from this Sample ?",
                friendlyAttributeName: 'Reference environmental result',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:EnvironmentalResults:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a environmental result"
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
                title: "what biological results are taken from this Sample ?",
                friendlyAttributeName: 'Reference biological result',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:BiologicalResults:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a biological result"
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
            required: ['name','samplingDate'],
            description: `This represents a Sample`,
        },
    },
};
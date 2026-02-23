import { StellioTemplate } from 'src/interfaces';

export const BiologicalResultTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:BiologicalResult:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
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
    hasSoilMicrobiome: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:SoilMicrobiome:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Which soil microbiome is associated with these results ?",
                friendlyAttributeName: 'Reference Soil Microbiome',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "BiologicalResult",
            title: "Biological Result",
            minimum: 0,
            required: ['name','hasWeedSpecies','hasCropSpecies'],
            description: `This represents a Biological Result`,
        },
    },
};

import { StellioTemplate } from 'src/interfaces';

export const biologicalResultTemplate: StellioTemplate = {
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
    hasWeedSpecies: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:WeedSpecies:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Which weed species are associated with these results ?",
                friendlyAttributeName: 'Reference Weed Species',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasCropSpecies: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:CropSpecies:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Which crop species are associated with these results ?",
                friendlyAttributeName: 'Reference Crop Species',
                minimum: 1,
                maximum: 1,
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
            minimum: 1,
            required: ['name','hasWeedSpecies','hasCropSpecies'],
            description: `This represents a Biological Result`,
        },
    },
};

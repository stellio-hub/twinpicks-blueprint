import { StellioTemplate } from 'src/interfaces';

export const AgriResourceTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Resource:Template`,
    type: 'Template',
    amount: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Amount' },
        },
    },
    category: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                title: 'Category' },
        },
    },
    resourceType: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                title: 'Resource Type' },
        },
    },
    unit: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'unit' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Resource",
            title: "Resource",
            minimum: 0,
            required: ['name', 'datasetId','amount','category',
                'resourceType','unit'],
            description: `This represents a Resource`,
        },
    },
};
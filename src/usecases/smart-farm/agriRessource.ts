import { StellioTemplate } from 'src/interfaces';

export const agriRessourceTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Ressource:Template`,
    type: 'Template',
    value: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    datasetId: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    amount: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'amount' },
        },
    },
    category: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'category' },
        },
    },
    ressourceType: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Ressource Type' },
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
            schemaType: "Ressource",
            title: "Ressource",
            minimum: 1,
            required: ['name', 'datasetId','amount','category',
                'ressourceType','unit'],
            description: `This represents a Ressource`,
        },
    },
};
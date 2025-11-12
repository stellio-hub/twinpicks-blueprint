import { StellioTemplate } from 'src/interfaces';

export const agronomicPracticesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:agronomicPractices:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    weed_management_strategy: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Strategie de gestion des mauvaise herbes' },
        },
    },
    soil_management_technique: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'technique de gestion du sols' },
        },
    },
    irrigation_methods: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "méthodes d'irrigation" },
        },
    },
    fertilizer_type: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "type d'engrais" },
        },
    },
    fertilizer_quantity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "Quantite d'engrais" },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "AgronomicPractices",
            title: "Agronomic Practices",
            minimum: 1,
            required: ['name', 'weed_management_strategy','soil_management_technique',
                'irrigation_methods','fertilizer_type','fertilizer_quantity'],
            description: `This represents a Agronomic Practices`,
        },
    },
};
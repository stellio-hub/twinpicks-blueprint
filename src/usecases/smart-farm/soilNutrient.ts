import { StellioTemplate } from 'src/interfaces';

export const soilNutrientTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:SoilNutrient:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    nitrogen_levels: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'nitrogen_levels' },
        },
    },
    phosphorus_levels: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'phosphorus_levels' },
        },
    },
    potassium_levels: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'potassium_levels' },
        },
    },
    cation_exchange_capacity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'cation_exchange_capacity' },
        },
    },
    organic_matter_content: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'organic_matter_content' },
        },
    },
    zinc: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'zinc' },
        },
    },
    copper: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'copper' },
        },
    },
    manganese: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'manganese' },
        },
    },
    iron: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'iron' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "SoilNutrient",
            title: "Soil Nutrient",
            minimum: 1,
            required: ['name'],
            description: `This represents a Soil Nutrient`,
        },
    },
};
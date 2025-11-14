import { StellioTemplate } from 'src/interfaces';

export const soilNutrientTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:SoilNutrient:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    nitrogenLevels: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nitrogen levels' },
        },
    },
    phosphorusLevels: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Phosphorus levels' },
        },
    },
    potassiumLevels: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Potassium levels' },
        },
    },
    cationExchangeCapacity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Cation exchange capacity' },
        },
    },
    organicMatter: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Organic matter content' },
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
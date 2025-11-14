import { StellioTemplate } from 'src/interfaces';

const cropSpeciesCategories = [
    "Field Crops - Wheat",
    "Field Crops - Barley",
    "Vegetables - Tomatoes",
    "Vegetables - Peppers",
    "Vegetables - Leafy Greens",
    "Fruit Trees - Apples",
    "Fruit Trees - Pears",
    "Fruit Trees - Olives",
    "Vineyards - Grapes",
    "Field Crops - Sunflower",
]

const cropCategories = [
    "Wheat (Triticum spp.)",
    "Barley (Hordeum vulgare)",
    "Corn (Zea mays)",
    "Tomatoes (Solanum lycopersicum)",
    "Peppers (Capsicum spp.)",
    "Leafy Greens (various species)",
    "Apples (Malus domestica)",
    "Pears (Pyrus spp.)",
    "Olives (Olea europaea)",
    "Grapes (Vitis vinifera)",
]

export const cropSpeciesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:CropSpecies:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: cropCategories,
                title: 'Name' },
        },
    },
    yield: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'yield' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "CropSpecies",
            title: "Crop Species",
            minimum: 1,
            required: ['name','yield'],
            description: `This represents a crop Species`,
        },
    },
};
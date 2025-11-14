import { StellioTemplate } from 'src/interfaces';

const soilManagmentCategories = [
    "Crop Rotation",
    "Reduced Tillage",
    "Cover Cropping",
    "Organic Mulching",
    "Green Manuring",
    "Nutrient Management",
    "Biochar Application",
]

const weedManagementCategories = [
    "Crop Rotation",
    "Cover Crops",
    "Reduced Tillage",
    "Mechanical Weeding",
    "Chemical Control",
    "Biological Control",
    "Natural Herbicides",
    "Mulching",
    "Precision Agriculture Techniques",
]

const irrigationManagmentCategories = [
    "Drip Irrigation",
    "Sprinkler Irrigation",
    "Surface Irrigation",
    "Subsurface Irrigation",
]

const fertilizersCategories = [
    "Organic Fertilizers",
    "Inorganic Fertilizers",
    "Slow-Release Fertilizers",
    "Liquid Fertilizers",
    "Green Manures",
]

const farmingSystemsCategories = [
    "Organic Farming",
    "Conventional Farming",
    "Slow-Release Fertilizers",
    "Integrated Farming",
]
const treatmentTypeCategories = [
    "Mechanical weeding",
    "Organic mulch",
    "Acetic acid treatment",
    "Pelargonic acid treatment",
    "No treatment",
    "Conventional treatment",
    "False seedbed",
    "Shifted sowing time"
]

export const agronomicPracticesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:agronomicPractices:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    treatmentType: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', 
                enum : treatmentTypeCategories, 
                title: 'Treatment Type' },
        },
    }, 
    farmingSystems: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: farmingSystemsCategories,
                title: 'Farming Systems' },
        },
    },
    weedManagement: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: weedManagementCategories,
                title: 'Weed Management Strategy' },
        },
    },
    soilManagement: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: soilManagmentCategories,
                title: 'Soil Management Technique' },
        },
    },
    irrigationMethods: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: irrigationManagmentCategories,
                title: "Irrigation Methods" },
        },
    },
    fertilizerType: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: fertilizersCategories,
                title: "Fertilizer Type" },
        },
    },
    fertilizerQuantity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: "Fertilizer Quantity" },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "AgronomicPractices",
            title: "Agronomic Practices",
            minimum: 1,
            required: ['name', 'treatmentType','weedManagement','soilManagement',
                'irrigationMethods','fertilizerType','fertilizerQuantity'],
            description: `This represents a Agronomic Practices`,
        },
    },
};
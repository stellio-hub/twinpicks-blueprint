import { StellioTemplate } from 'src/interfaces';

export const soilMicrobiomeTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:SoilMicrobiome:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    bacterial_diversity_index: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'bacterial_diversity_index' },
        },
    },
    fungal_diversity_index: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'fungal_diversity_index' },
        },
    },
    microbial_biomass: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'microbial_biomass' },
        },
    },
    Enzme_activities: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Enzme_activities' },
        },
    },
    soil_respiration_rate: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'soil_respiration_rate' },
        },
    },
    soil_organic_matter_content: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'soil_organic_matter_content' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "SoilMicrobiome",
            title: "Soil Microbiome",
            minimum: 1,
            required: ['name', 'bacterial_diversity_index','fungal_diversity_index',
                'microbial_biomass','Enzme_activities','soil_respiration_rate',
                'soil_organic_matter_content'],
            description: `This represents a Soil Microbiome`,
        },
    },
};





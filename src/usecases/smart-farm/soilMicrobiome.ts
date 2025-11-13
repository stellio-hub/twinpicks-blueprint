import { StellioTemplate } from 'src/interfaces';

export const soilMicrobiomeTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:SoilMicrobiome:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    bacterialDiversity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Bacterial diversity index' },
        },
    },
    fungalDiversity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Fungal diversity index' },
        },
    },
    microbialBiomass: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Microbial biomass' },
        },
    },
    enzmeActivities: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Enzme activities' },
        },
    },
    soilRespiration: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Soil respiration rate' },
        },
    },
    soilOrganicMatter: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Soil organic matter content' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "SoilMicrobiome",
            title: "Soil Microbiome",
            minimum: 1,
            required: ['name', 'bacterialDiversity','fungalDiversity',
                'microbialBiomass','enzmeActivities','soilRespiration',
                'soilOrganicMatter'],
            description: `This represents a Soil Microbiome`,
        },
    },
};





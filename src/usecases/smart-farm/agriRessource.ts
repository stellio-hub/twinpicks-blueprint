import { StellioTemplate } from 'src/interfaces';

const ressourceTypeCategories = [
  'Human labour',
  'Seeds and planting material',
  'Fertilisers and soil amendments',
  'Companion / cover crop species',
  'Special crop varieties',
  'Tillage machinery',
  'Mechanical weeding tools',
  'Grazing animals and fencing',
  'Plastic films / soil covers',
  'Water / steam / foam',
  'Gas fuel (for flame weeding)',
  'Electrical weeding equipment',
  'Laser weeding robots',
  'Sprayers and application equipment',
  'Synthetic herbicides (localized use)',
  'Bio-based herbicides',
  'Digital / AI detection systems',
  'Auther',
]


export const agriRessourceTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Ressource:Template`,
    type: 'Template',
    amount: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Amount' },
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
    ressourceType: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: ressourceTypeCategories,
                title: 'Ressource Type' },
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
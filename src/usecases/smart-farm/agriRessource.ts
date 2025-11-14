import { StellioTemplate } from 'src/interfaces';

const ressourceTypeCategories = [
    "pesticides",
    "mechanical weeding",
    "thermal weeding",
    "electrical weeding",
    "biological weeding",
    "cultural weeding",
    "manual weeding",
    "robotic weeding",
    "chemical weeding",
    "Matériel d'irrigation",
    "Matériel d'entretien des cultures",
    "Matériel de récolte",
    "Produits phytosanitaires",
    "Matériel de protection des cultures",
    "Engrais",
    "Matériel de fertilisation",
    "Semences",
    "Matériel de semis",
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
import { StellioTemplate } from '../../interfaces';

export const StructureConfigTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:StructureConfig:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'StructureConfig',
            title: 'Configuration des structures',
            required: [],
            maximum: 1,
            minimum: 1,
            description: 'Entité technique de configuration utilisée pour le mapping des catégories de structures',
        },
    },

    firstLevelGroupOrder: {
        type: 'JsonProperty',
        json: {
            exampleKey: 0,
            exampleKey2: 1,
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'json',
                title: 'Ordre des groupes de catégories de structures',
            },
        },
    },
    speciesStructureMapping: {
        type: 'JsonProperty',
        json: {
            exampleKey: 'exampleValue',
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'json',
                title: 'Mapping des catégories de structures',
            },
        },
    },
    actionStructureMapping: {
        type: 'JsonProperty',
        json: {
            exampleKey: 'exampleValue',
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'json',
                title: "Mapping des catégories d'actions",
            },
        },
    },
};

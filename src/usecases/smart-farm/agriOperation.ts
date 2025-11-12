import { StellioTemplate } from 'src/interfaces';

export const agriOperationTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Operation:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'description' },
        },
    },
    category: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'category' },
        },
    },
    hasRessources: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Ressource:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "resourse utiliser pendant l'opperation ?",
                friendlyAttributeName: 'Ressource de référence',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Ressources:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a Ressource"
                        }
                    }
                }
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Operation",
            title: "Operation",
            minimum: 1,
            required: ['name', 'description'],
            description: `This represents a Operation`,
        },  
    },
};

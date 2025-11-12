import { StellioTemplate } from 'src/interfaces';

export const agriItineraryTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Itinerary:Template`,
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
    activity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'activity' },
        },
    },
    hasOperation: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Operation:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "Operation utiliser pendant l'itineraire ?",
                friendlyAttributeName: 'Operation de référence',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:Operation:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a Operation"
                        }
                    }
                }
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Itinerary",
            title: "Itinerary",
            minimum: 1,
            required: ['name', 'description','activity'],
            description: `This represents a Itinerary`,
        },  
    },
};
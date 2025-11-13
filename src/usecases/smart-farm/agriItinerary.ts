import { StellioTemplate } from 'src/interfaces';

export const activityCategories = [
    "winter oats",
    "winter soft wheat",
    "farm",
    "heifer",
    "alfalfa",
    "maize",
    "winter barley",
    "grassland",
]
export const agriItineraryTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Itinerary:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Description' },
        },
    },
    activity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: activityCategories,
                title: 'Activity' },
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
                title: "Operations taken during a itinerary",
                friendlyAttributeName: 'Reference Operation',
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
            required: ['name', 'description','activity','hasOperation'],
            description: `This represents a Itinerary`,
        },  
    },
};
import { StellioTemplate } from 'src/interfaces';

const activityCategories = [
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

export const AgriItineraryTemplate: StellioTemplate = {
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
                title: 'Activity' },
        },
    },
    hasOperations: {
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
                    },
                    day: {
                        type: 'Property',
                        value: 'Placeholder',
                        jsonSchema: {
                            type: 'Property',
                            value: { schemaType: 'number',
                                title: 'Day' },
                        },
                    },
                    hasResources: {
                        type: 'Relationship',
                        object: 'urn:ngsi-ld:Resource:Template',
                        jsonSchema: {
                            type: 'Property',
                            value: {
                                schemaType: "string",
                                format: "uri",
                                title: "Select a Resource"
                            },
                        },
                    },
                }
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Itinerary",
            title: "Itinerary",
            minimum: 0,
            required: ['name', 'description'],
            description: `This represents a Itinerary`,
        },  
    },
};
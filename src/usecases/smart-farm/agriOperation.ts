import { StellioTemplate } from 'src/interfaces';

const categoryCategories = [
    "Crop rotation",
    "Soil tillage decrease",
    "Soil mineral balancing",
    "Permanent companion crop",
    "Allelopathy",
    "Cover crops",
    "Annual companion plant",
    "Variety and plant architecture", 
    "Sowing", 
    "Space rows", 
    "Deep soil cultivation with inversion", 
    "Mechanical weeding on the crop", 
    "Stale seedbed",  
    "Mechanical weeding - weed cutting above crop",
    "Grazing",
    "Solarization",
    "Hand weeding",
    "Electrical weeding",
    "Hot foam weeding",
    "Hot vapor weeding",
    "Flame weeding",
    "Laser weeding",
    "Localized herbicide use",
    "Bio-based herbicide",
]

    


export const AgriOperationTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Operation:Template`,
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
    category: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum:categoryCategories,
                title: 'Category' },
        },
    },
    hasToolRequirements:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:ToolRequirements:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                format: 'uri',
                title: "What are the requirements for this operation ?",
                friendlyAttributeName: 'Reference Tool Requirements',
                minItems: 1,
                items: {
                    type: "Relationship",
                    object: "urn:ngsi-ld:ToolRequirements:Template",
                    jsonSchema: {
                        type: "Property",
                        value: {
                            schemaType: "string",
                            format: "uri",
                            title: "Select a tool requirement"
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
            minimum: 0,
            required: ['name', 'description'],
            description: `This represents a Operation`,
        },  
    },
};

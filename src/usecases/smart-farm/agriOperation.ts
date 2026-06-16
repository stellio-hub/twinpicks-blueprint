import { StellioTemplate } from 'src/interfaces';
import {
    getRelationshipProp,
} from '../../utils/blueprintHelpers';

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
        ...getRelationshipProp(
            "What are the requirements for this operation ?",
            'urn:ngsi-ld:ToolRequirements:Template'
        )
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

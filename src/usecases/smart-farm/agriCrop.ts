import { StellioTemplate } from 'src/interfaces';
import {
    getRelationshipProp,
} from '../../utils/blueprintHelpers';

const severity = [
    1,2,3,4,5,6,7,8,9,10
]

export const AgriCropTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Crop:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    pathogenServerity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',   
            value: { schemaType: 'number', enum: severity, title: 'Pathogen serverity' },
        },
    },
    soilCoverage: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Soil coverage %' },
        },
    },
    startAt: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'date', title: 'Start' },
        },
    },
    endAt: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'date', title: 'End' },
        },
    },
    rowSpacing: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Row Spacing in cm' },
        },
    },
    irrigation: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Irrigation in L' },
        },
    },
    fertilizerQuantity: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'fertilization in Kg' },
        },
    },
    tillagePractices: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Tillage Practices' },
        },
    },
    hasCropSpecies: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:CropSpecies:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "what's the Species is this Crop ?",
                friendlyAttributeName: 'Reference Crop Species',
            },
        },
    },
    isCultivatedOn:{
        ...getRelationshipProp(
            "What is the parcel area where the crop is planted?",
            'urn:ngsi-ld:ParcelArea:Template'
        )
    },
    yield: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Yield (mg/ha)' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Crop",
            title: "Crop",
            minimum: 0,
            required: ['name','hasCropSpecies','startAt'],
            description: `This represents a Crop`,
        },  
    }
};
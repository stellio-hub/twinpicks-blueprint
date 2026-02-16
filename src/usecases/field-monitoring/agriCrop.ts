import { StellioTemplate } from 'src/interfaces';

const severity = [
    1,2,3,4,5,6,7,8,9,10
]

export const agriCropTemplate: StellioTemplate = {
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
    fertilization: {
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
            value: { schemaType: 'number', title: 'fertilization in Kg' },
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
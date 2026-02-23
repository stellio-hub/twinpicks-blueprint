import { StellioTemplate } from 'src/interfaces';

const severity = [
    1,2,3,4,5,6,7,8,9,10
]

const survey = [
    "T0","T1","T2"
]

export const AgriWeedTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Weed:Template`,
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
    BBCH: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'BBCH' },
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
    number: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'number' },
        },
    },
    desiccation : {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'number', title: 'Percentage of desiccation ' },
        },
    },
    surveyTime: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',enum: survey , title: 'time of survey (T0, T1 or T2)' },
        },
    },
    hasWeedSpecies: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:WeedSpecies:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "what's the Species is this Crop ?",
                friendlyAttributeName: 'Reference Weed Species',
            },
        },
    },
    biomass: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Biomass' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Weed",
            title: "Weed",
            minimum: 0,
            required: ['name','hasWeedSpecies','startAt'],
            description: `This represents a Weed`,
        },  
    }
};
import { StellioTemplate } from 'src/interfaces';

export const environmentalResultTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:EnvironmentalResult:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    soilPH: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Soil PH' },
        },
    },
    soilMoisture: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Soil Moisture' },
        },
    },
    biodiversityIndex: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Biodiversity index' },
        },
    },
    pesticideUse: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Pesticide use' },
        },
    },
    pesticideImpact: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Pesticide Impact' },
        },
    },
    soilNutrientContent:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:SoilNutrient:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Which soil nutrient is associated with these results?",
                friendlyAttributeName: 'Soil nutrient of reference',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "EnvironmentalResult",
            title: "Environmental Result",
            minimum: 1,
            required: ['name','soilPH','soilMoisture','biodiversityIndex',
                'pesticideUse','pesticideImpact'],
            description: `This represents a Environmental Result`,
        },
    },
};

import { StellioTemplate } from 'src/interfaces';

export const environmentalResultTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:EnvironmentalResult:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    soil_ph: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'soil_ph' },
        },
    },
    soil_moisture: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'soil_moisture' },
        },
    },
    biodiversity_index: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'biodiversity_index' },
        },
    },
    pesticide_use: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'pesticide_use' },
        },
    },
    pesticide_impact: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'pesticide_impact' },
        },
    },
    soil_nutrient_content:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:SoilNutrient:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelles SoilNutrient est associe a ces Resultat ?",
                friendlyAttributeName: 'SoilNutrient de référence',
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
            required: ['name','soil_ph','soil_moisture','biodiversity_index',
                'pesticide_use','pesticide_impact'],
            description: `This represents a Environmental Result`,
        },
    },
};

import { StellioTemplate } from 'src/interfaces';

export const biologicalResultTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:BiologicalResult:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    hasweedSpecies: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:WeedSpecies:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelles weed est associe a ces Resultat ?",
                friendlyAttributeName: 'WeedSpecies de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hascropSpecies: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:CropSpecies:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelles crop est associe a ces Resultat ?",
                friendlyAttributeName: 'Crop Species de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hassoilMicrobiome: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:SoilMicrobiome:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelles Soil Microbiome est associe a ces Resultat ?",
                friendlyAttributeName: 'Soil Microbiome de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "BiologicalResult",
            title: "Biological Result",
            minimum: 1,
            required: ['name'],
            description: `This represents a Biological Result`,
        },
    },
};

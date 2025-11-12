import { StellioTemplate } from 'src/interfaces';

export const caseStudyTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:CaseStudy:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Point',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Dessiner et suivre la voie sur la carte',
                friendlyAttributeName: 'Géolocalisation',
            },
        },
    },
    startAt: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'datetime', title: 'debut' },
        },
    },
    endAt: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'datetime', title: 'debut' },
        },
    },
    hasParcel:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:Parcel:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelles Parcel est associe a cette case study ?",
                friendlyAttributeName: 'Analise de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasSocialEco: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:SocialEco:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelles SocialEco est associe a cette case study ?",
                friendlyAttributeName: 'SocialEco de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "CaseStudy",
            title: "Case Study",
            minimum: 1,
            required: ['name', 'location','startAt','hasParcel'],
            description: `This represents a Case Study`,
        },
    },
};
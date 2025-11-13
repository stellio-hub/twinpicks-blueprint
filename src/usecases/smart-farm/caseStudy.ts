import { StellioTemplate } from 'src/interfaces';

export const caseStudyTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:CaseStudy:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
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
                title: 'Place a point on the map',
                friendlyAttributeName: 'Geolocation',
            },
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
    hasParcel:{
        type: 'Relationship',
        object: 'urn:ngsi-ld:Parcel:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Which plot is associated with this case study?",
                friendlyAttributeName: 'Reference Plot',
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
                title: "Which socio-economic aspects are associated with this case study?",
                friendlyAttributeName: 'Reference socio-economic',
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
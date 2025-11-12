import { StellioTemplate } from 'src/interfaces';

export const agriCampaignTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Campaign:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
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
    hasItinerary: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Itinerary:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelle est la Itinerare de référence pour cette Campagne ?",
                friendlyAttributeName: 'Itinerare de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Campaign",
            title: "Campaign",
            minimum: 1,
            required: ['name', 'startAt'],
            description: `This represents a Campaign`,
        },  
    }
};
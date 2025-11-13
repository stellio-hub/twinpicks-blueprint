import { StellioTemplate } from 'src/interfaces';

export const agriCampaignTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:Campaign:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
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
    hasItinerary: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Itinerary:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "what itinerary is connected to this campaign",
                friendlyAttributeName: 'Reference itinerary',
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
            required: ['name', 'startAt','endAt','hasItinerary'],
            description: `This represents a Campaign`,
        },  
    }
};
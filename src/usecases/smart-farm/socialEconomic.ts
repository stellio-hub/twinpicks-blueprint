import { StellioTemplate } from 'src/interfaces';

export const socialEconomicTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:SocialEconomic:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Name' },
        },
    },
    recordedAt: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'date', title: 'recordedAt' },
        },
    },
    farmerFeedback: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Farmer feedback' },
        },
    },
    economicsCosts: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Economics costs' },
        },
    },
    laborHours: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Labor hour' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "SocialEconomic",
            title: "Social Economic",
            minimum: 1,
            required: ['name', 'observedAt','farmerFeedback',
                'economicsCosts','laborHours'
            ],
            description: `This represents a Social Economics`,
        },
    },
};

import { StellioTemplate } from 'src/interfaces';

export const socialEconomicTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:SocialEconomic:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    observedAt: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'datetime', title: 'observedAt' },
        },
    },
    farmer_feedback: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'farmer feedback' },
        },
    },
    economics_costs: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'economics costs' },
        },
    },
    labor_hours: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'labor hour' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "SocialEconomic",
            title: "Social Economic",
            minimum: 1,
            required: ['name', 'observedAt','farmer_feedback',
                'economics_costs','labor_hours'
            ],
            description: `This represents a Social Economics`,
        },
    },
};

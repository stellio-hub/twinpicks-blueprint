import { StellioTemplate } from 'src/interfaces';

export const WeatherInformationTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:WeatherInformation:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'string',
            title: 'Name of the weather information',
            friendlyAttributeName: 'Name',
        },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'WeatherInformation',
            title: 'Weather Information',
            description: "Gather the weather information for an operational area.",
            required: ['name'],
            minimum: 0,
            canEntityBeCreated: true,
        },
    },
};

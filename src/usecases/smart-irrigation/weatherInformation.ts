import { StellioTemplate } from 'src/interfaces';

export const WeatherInformationTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:WeatherInformation:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'WeatherInformation',
            title: 'Information Météo',
            description: "Rassemble les informations météo d'une zone d'opération",
            minimum: 0,
            canEntityBeCreated: false,
        },
    },
};

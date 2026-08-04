import { StellioTemplate } from 'src/interfaces';

export const IrrigationAreaTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:IrrigationArea:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'IrrigationArea',
            title: "Zone d'irrigation",
            minimum: 1,
            required: ['name', 'k', 'belongsTo', 'location', 'hasWeatherForecasted'],
            description:
                'Représentation géographique de taille intermédiaire qui regroupe en générale plusieurs petites zones controllées (ou zones en gestion)',
        },
    },
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "Nom de la zone d'irrigation", friendlyAttributeName: 'Nom' },
        },
    },
    zoomLevel: {
        type: 'Property',
        value: 18,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Niveau de zoom sur la zone d'irrigation depuis la carte",
                friendlyAttributeName: 'Niveau de zoom',
                canSelfInit: true,
            },
        },
    },
    waterConsumption: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: "Consommation d'eau",
                canSelfInit: true,
            },
        },
    },
    k: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: 'Facteur de conversion des impulsions en litres (L/pulse)',
                friendlyAttributeName: 'Facteur k',
            },
        },
    },
    belongsTo: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Field:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Cette zone d'irrigation appartient à quel champ d'opération ?",
                friendlyAttributeName: 'Appartient à',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasWeatherInformation: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:WeatherInformation:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelle est la Météo de référence pour cette zone d'irrigation ?",
                friendlyAttributeName: 'Météo de référence',
                minimum: 1,
                maximum: 1,
            },
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
                title: "Où se situe la zone d'irrigation ?",
                friendlyAttributeName: 'Géolocalisation',
            },
        },
    },
};

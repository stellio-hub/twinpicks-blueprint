import { StellioTemplate } from 'src/interfaces';

export const BuildingTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Building:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du bâtiment',
            },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Description du bâtiment',
            },
        },
    },
    /**
     * A GeoProperty in a Building will display the RNB selector component in TP
     */
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
                title: 'Sélectionner le bâtiment sur la carte',
            },
        },
    },
    /**
     *  The `rnb` JsonProperty must be present in the blueprint if required \
     *  It won't be added to the entity otherwise
     */
    rnb: {
        type: 'JsonProperty',
        json: '{}',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'json',
                canSelfInit: true,
                friendlyAttributeName: 'Référentiel National des Bâtiments',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Building',
            title: 'Bâtiment',
            required: ['name', 'location'],
            minimum: 1,
            description: "Jumeau numérique du bâtiment d'où proviennent les données",
        },
    },
};

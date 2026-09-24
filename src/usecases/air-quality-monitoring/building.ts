import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getJsonPropertyProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'Building';

export const BuildingTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom du bâtiment', friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description du bâtiment', friendlyAttributeName: 'Description' }),
    },
    /**
     * A GeoProperty in a Building will display the RNB selector component in TP
     */
    location: {
        ...getGeoPropertyProp({
            formLabel: 'Sélectionner le bâtiment sur la carte',
            geometryType: 'Polygon',
        }),
    },
    /**
     *  The `rnb` JsonProperty must be present in the blueprint if required with canSelfInit set to true \
     *  It won't be added to the entity otherwise
     */
    rnb: {
        ...getJsonPropertyProp({ formLabel: 'Référentiel National des Bâtiments', canSelfInit: true }),
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

import { StellioTemplate } from 'src/interfaces';
import {
    getGeoPropertyProp,
    getJsonPropertyProp,
    getMultiRelationshipProp,
    getRelationshipProp,
    getSimpleTextProp,
} from '../../utils/blueprintHelpers';

const entityType = 'Building';

export const BuildingTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom du bâtiment', friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description du bâtiment' }),
    },
    hasUsage: {
        ...getMultiRelationshipProp({
            formLabel: 'Utilisation du bâtiment',
            formLabelPerItem: "Choisir un type d'usage",
            targetTemplateObjectId: 'urn:ngsi-ld:Usage:Template',
        }),
    },
    isPartOf: {
        ...getRelationshipProp({
            formLabel: 'Appartient au site',
            targetTemplateObjectId: 'urn:ngsi-ld:Site:Template',
        }),
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
     *  The `rnb` JsonProperty must be present in the blueprint if required \
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
            description: 'Jumeau numérique du bâtiment',
        },
    },
};

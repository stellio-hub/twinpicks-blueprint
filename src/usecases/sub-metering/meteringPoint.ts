import { StellioTemplate } from 'src/interfaces';
import {
    getEnumProp,
    getMultiRelationshipProp,
    getRelationshipProp,
    getSimpleTextProp,
} from '../../utils/blueprintHelpers';

const entityType = 'MeteringPoint';

/** Stable codes (data model principle 4, D10) */
export const fluidTypes = ['electricity', 'gas', 'water', 'heat'];
export const communicationStatuses = [
    'connected',
    'notConnected',
    'notCommunicating',
    'communicationFailure',
    'doubtful',
    'planned',
];

const meterTemplates = ['urn:ngsi-ld:MeteringPoint:Template', 'urn:ngsi-ld:DeliveryPoint:Template'];

/**
 * Place where a fluid is measured (or computed) below a delivery point, for every fluid (D32).
 * Its measures (`consumption`, `index`) are copied from the device that `controlledAsset` links
 * to it. Shared layer: to move to building-management once agreed.
 */
export const MeteringPointTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom du point de comptage', friendlyAttributeName: 'Nom' }),
    },
    fluidType: {
        ...getEnumProp({ title: 'Fluide', enum: fluidTypes }),
    },
    meteringType: {
        ...getEnumProp({ title: 'Type de comptage', enum: ['physical', 'virtual'] }),
    },
    communicationStatus: {
        ...getEnumProp({ title: 'État de communication', enum: communicationStatuses }),
    },
    // Series to use when several systems measure the point; the others are shown as a check (D39)
    referenceSource: {
        ...getSimpleTextProp({
            title: 'Source de référence',
            description:
                'Code de la source à utiliser quand plusieurs systèmes mesurent ce point (ex. SubMeter, GTC). Vide : une seule source.',
        }),
    },
    // Position in the metering tree, child → parent (D33)
    isFedBy: {
        ...getRelationshipProp({
            formLabel: 'Compteur amont',
            listOfAllowedRelationships: meterTemplates,
        }),
    },
    controlledAsset: {
        ...getMultiRelationshipProp({
            formLabel: 'Ce que le point de comptage alimente',
            formLabelPerItem: 'Sélectionner un bâtiment, un équipement, un espace ou une sortie électrique',
            targetTemplateObjectId: 'urn:ngsi-ld:Building:Template',
            listOfAllowedRelationships: [
                'urn:ngsi-ld:Building:Template',
                'urn:ngsi-ld:Asset:Template',
                'urn:ngsi-ld:Space:Template',
                'urn:ngsi-ld:ConnectivityNode:Template',
            ],
            minimum: 0,
        }),
    },
    // Virtual meter: consumption = Σ addedMeter − Σ subtractedMeter (D34)
    addedMeter: {
        ...getMultiRelationshipProp({
            formLabel: 'Compteur virtuel : compteurs ajoutés',
            formLabelPerItem: 'Sélectionner un compteur',
            targetTemplateObjectId: 'urn:ngsi-ld:MeteringPoint:Template',
            listOfAllowedRelationships: meterTemplates,
            minimum: 0,
        }),
    },
    subtractedMeter: {
        ...getMultiRelationshipProp({
            formLabel: 'Compteur virtuel : compteurs soustraits',
            formLabelPerItem: 'Sélectionner un compteur',
            targetTemplateObjectId: 'urn:ngsi-ld:MeteringPoint:Template',
            listOfAllowedRelationships: meterTemplates,
            minimum: 0,
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Point de comptage',
            required: ['name', 'fluidType', 'meteringType'],
            description:
                "Compteur ou sous-compteur (physique), ou compteur calculé à partir d'autres (virtuel), placé dans l'arborescence de comptage.",
            minimum: 0,
        },
    },
};

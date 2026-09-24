import { StellioTemplate } from 'src/interfaces';
import { getEnumProp, getRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'ConnectivityNode';

export const ConnectivityNodeTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom de la sortie électrique', friendlyAttributeName: 'Nom' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description' }),
    },
    deliveryPointNumber: {
        ...getSimpleTextProp({ title: 'Identifiant de la sortie électrique ' }),
    },
    phaseCode: {
        ...getEnumProp({
            title: 'Phasage de la sortie (phase A, B ou C; phase inconnue X; Neutre N) ',
            enum: ['AN', 'BN', 'CN', 'XN', 'ABCN', 'ABN'],
        }),
    },
    isPartOf: {
        ...getRelationshipProp({
            formLabel: "Appartient à l'armoire électrique",
            targetTemplateObjectId: 'urn:ngsi-ld:ElectricalCabinet:Template',
        }),
    },

    /**
     * Les attributs activeEnergy, activePower, etc. Doivent être associés aux phaqses via le datasetId (ex.: "datasetId": "urn:ngsi-ld:Dataset:phase:B"). A vérifier si cela est fait via la connection des capteurs actuels (et homogène pour tous les capteurs) ou si celà doit être défini quelquepart.
     */
    /**
     * La modélisation des éléments de contrôle (ex. une horloge programmable ) devra être ajouté
     */
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Sortie électrique',
            required: ['name', 'phaseCode', 'isPartOf'],
            description: `Point de sortie électrique, possiblement protégé/contrôlé par d'autres équiepemtns de l'armoire électrique`,
            minimum: 0,
            identifier: 'deliveryPointNumber',
        },
    },
};

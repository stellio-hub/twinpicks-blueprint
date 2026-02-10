import { StellioTemplate } from '../../interfaces';
import { getDisplayNameProp, getSimpleTextProp, getStructureJsonProp, getDateProp } from './utils';
import * as Structures from './actionsDataStructures';

export const ActionTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Action:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Action',
            title: 'Action',
            required: ['nom'],
            minimum: 0,
            description: "Entité représentant une action de gestion de l'espèce",
        },
    },

    titre: {
        ...getSimpleTextProp('Titre'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Titre'),
    },
    description: {
        ...getSimpleTextProp('Description'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Description'),
    },
    typeAction: {
        ...getSimpleTextProp('Type action'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Type action'),
    },
    statut: {
        ...getSimpleTextProp('Statut'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Statut'),
    },
    dateDebut: {
        ...getDateProp('Date de début'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Date de début'),
    },
    dateFin: {
        ...getDateProp('Date de fin'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Date de fin'),
    },
    commentaires: {
        ...getSimpleTextProp('Commentaires'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Commentaires'),
    },
};

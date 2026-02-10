import { StellioTemplate } from 'src/interfaces';
import { getDisplayNameProp, getSimpleTextProp, getStructureJsonProp, getDateProp } from 'src/usecases/eaee/utils';
import * as Structures from 'src/usecases/eaee/actionsDataStructures';

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
        ...getSimpleTextProp('Titre', 1),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Titre'),
    },
    description: {
        ...getSimpleTextProp('Description', 2),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Description'),
    },
    typeAction: {
        ...getSimpleTextProp('Type action', 3),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Type action'),
    },
    statut: {
        ...getSimpleTextProp('Statut', 4),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Statut'),
    },
    dateDebut: {
        ...getDateProp('Date de début', 5),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Date de début'),
    },
    dateFin: {
        ...getDateProp('Date de fin', 6),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Date de fin'),
    },
    commentaires: {
        ...getSimpleTextProp('Commentaires', 7),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Commentaires'),
    },
};

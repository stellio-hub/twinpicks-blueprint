import { StellioTemplate } from '../../interfaces';
import {
    getDisplayNameProp,
    getMultiRelationshipProp,
    getSimpleTextProp,
    getStructureJsonProp,
    getDateProp,
    getEnumProp,
    getGeoPropertyProp,
    getBooleanProp,
} from './utils';
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

    // #region GENERALITES
    name: {
        ...getSimpleTextProp("Nom de l'action"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Nom de l'action"),
    },
    objectifsDeLaction: {
        ...getSimpleTextProp("Objectifs de l'action"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Objectifs de l'action"),
    },
    description: {
        ...getSimpleTextProp("Description de l'action"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Description de l'action"),
    },
    dateDebut: {
        ...getDateProp('Date de début'),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp('Date de début'),
    },
    dateFin: {
        ...getDateProp('Date de fin'),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp('Date de fin'),
    },
    descriptionDetailleeDeLintervention: {
        ...getSimpleTextProp("Description détaillée de l'intervention"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Description détaillée de l'intervention"),
    },
    concertationAvecAutresActeursEtPartenaires: {
        ...getSimpleTextProp("Concertation avec d'autres acteurs et partenaires"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Concertation avec d'autres acteurs et partenaires"),
    },
    tempsAgentParMissionsEnHommeJour: {
        ...getSimpleTextProp('Temps agent par missions en homme/jour'),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp('Temps agent par missions en homme/jour'),
    },
    financeurDeLoperation: {
        ...getSimpleTextProp("Financeur de l'opération"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Financeur de l'opération"),
    },
    coutDeLoperation: {
        ...getSimpleTextProp("Coût(s) de l'opération"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Coût(s) de l'opération"),
    },
    indicateurDeSuiviDeLactionDansLeTemps: {
        ...getSimpleTextProp("Indicateur(s) de suivi de l'action dans le temps"),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp("Indicateur(s) de suivi de l'action dans le temps"),
    },
    detailDuOuDesSuivis: {
        ...getSimpleTextProp('Détail du ou des suivis'),
        structure: getStructureJsonProp(Structures.generalites),
        displayName: getDisplayNameProp('Détail du ou des suivis'),
    },
    // #endregion

    // #region PORTEURS DE PROJET
    nomStructurePilote: {
        ...getSimpleTextProp('Nom de la structure pilote'),
        structure: getStructureJsonProp(Structures.structurePilote),
        displayName: getDisplayNameProp('Nom'),
    },
    structurePiloteType: {
        ...getEnumProp('Type de la structure pilote', [
            'Association',
            'Collectivité',
            'Entreprise',
            'Etablissement scolaire',
            'Fondation',
            'Gestionnaire de milieux',
            'Autres',
        ]),
        structure: getStructureJsonProp(Structures.structurePilote),
        displayName: getDisplayNameProp('Type'),
    },
    missionPrincipaleDeLaStructurePilote: {
        ...getSimpleTextProp('Mission principale de la structure pilote'),
        structure: getStructureJsonProp(Structures.structurePilote),
        displayName: getDisplayNameProp('Mission principale'),
    },
    territoireDintervention: {
        ...getSimpleTextProp("Territoire d'intervention de la structure pilote"),
        structure: getStructureJsonProp(Structures.structurePilote),
        displayName: getDisplayNameProp("Territoire d'intervention"),
    },
    siteInternetDeLaStructurePilote: {
        ...getSimpleTextProp('Site internet de la structure pilote'),
        structure: getStructureJsonProp(Structures.structurePilote),
        displayName: getDisplayNameProp('Site internet'),
    },

    nomPersonneReferenteDeLaction: {
        ...getSimpleTextProp("Nom de la personne référente de l'action"),
        structure: getStructureJsonProp(Structures.personneReferente),
        displayName: getDisplayNameProp('Nom'),
    },
    prenomPersonneReferenteDeLaction: {
        ...getSimpleTextProp("Prénom de la personne référente de l'action"),
        structure: getStructureJsonProp(Structures.personneReferente),
        displayName: getDisplayNameProp('Prénom'),
    },
    structurePersonneReferenteDeLaction: {
        ...getSimpleTextProp("Structure de la personne référente de l'action"),
        structure: getStructureJsonProp(Structures.personneReferente),
        displayName: getDisplayNameProp('Structure'),
    },
    fonctionPersonneReferenteDeLaction: {
        ...getSimpleTextProp("Fonction de la personne référente de l'action"),
        structure: getStructureJsonProp(Structures.personneReferente),
        displayName: getDisplayNameProp('Fonction'),
    },
    email: {
        ...getSimpleTextProp("Email de la personne référente de l'action"),
        structure: getStructureJsonProp(Structures.personneReferente),
        displayName: getDisplayNameProp('Email'),
    },
    telephonePersonneReferenteDeLaction: {
        ...getSimpleTextProp("Téléphone de la personne référente de l'action"),
        structure: getStructureJsonProp(Structures.personneReferente),
        displayName: getDisplayNameProp('Téléphone'),
    },
    // #endregion

    // #region ESPÈCES LIÉES À L'ACTION
    relatedSpecies: {
        ...getMultiRelationshipProp(
            "Espèces liées à l'action",
            'Sélectionner une espèce',
            'urn:ngsi-ld:Species:Template'
        ),
    },
    // #endregion

    // #region LIEU DE L'ACTION
    echelleTerritorialeDeLaction: {
        ...getEnumProp("Échelle territoriale de l'action", [
            'Bassin versant',
            'Commune',
            'Communauté de communes',
            "Communautés d'Agglomération ou urbaine",
            'Métrople',
            "Parc d'activités",
            'Pays / Parc régional / Parc national',
            'Département',
            'Région',
            'Etablissement',
            'Autre',
        ]),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp('Échelle territoriale'),
    },
    departementDinterventionDeLaction: {
        ...getEnumProp("Département d'intervention de l'action", ['04', '05', '06', '13', '83', '84']),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp("Département d'intervention"),
    },
    commune: {
        ...getSimpleTextProp('Service(s) de la collectivité associé(s)'),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp('Service(s) de la collectivité associé(s)'),
    },
    nomDuSite: {
        ...getSimpleTextProp('Nom du site'),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp('Nom du site'),
    },
    descriptionDuSite: {
        ...getSimpleTextProp('Description du site'),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp('Description du site'),
    },
    localisationDuSite: {
        ...getGeoPropertyProp('Localisation du site', 'Polygon'),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp('Localisation du site'),
    },
    surface: {
        ...getEnumProp('Surface du site', [
            '< ou = à 10 m²',
            '11 à 100 m²',
            '101 à 1000 m²',
            '1001 à 10000 m²',
            '> à 10001 m²',
            'Inconnue',
        ]),
        structure: getStructureJsonProp(Structures.lieuDeLaction),
        displayName: getDisplayNameProp('Surface'),
    },
    // #endregion

    // #region TYPE D'ACTION
    documentDePlanification: {
        ...getBooleanProp('Document de planification'),
        structure: getStructureJsonProp(Structures.typeDaction),
        displayName: getDisplayNameProp('Document de planification'),
    },
    veille: {
        ...getBooleanProp('Veille'),
        structure: getStructureJsonProp(Structures.typeDaction),
        displayName: getDisplayNameProp('Veille'),
    },
    prospection: {
        ...getBooleanProp('Prospection'),
        structure: getStructureJsonProp(Structures.typeDaction),
        displayName: getDisplayNameProp('Prospection'),
    },

    gestionObjectifsExperimentation: {
        ...getBooleanProp('Expérimentation'),
        structure: getStructureJsonProp(Structures.objectifs),
        displayName: getDisplayNameProp('Expérimentation'),
    },
    gestionObjectifsControle: {
        ...getBooleanProp('Contrôle'),
        structure: getStructureJsonProp(Structures.objectifs),
        displayName: getDisplayNameProp('Controle'),
    },
    gestionObjectifsEradication: {
        ...getBooleanProp('Eradication'),
        structure: getStructureJsonProp(Structures.objectifs),
        displayName: getDisplayNameProp('Eradication'),
    },
    gestionObjectifsRegulation: {
        ...getBooleanProp('Régulation'),
        structure: getStructureJsonProp(Structures.objectifs),
        displayName: getDisplayNameProp('Régulation'),
    },
    gestionObjectifsConfinement: {
        ...getBooleanProp('Confinement'),
        structure: getStructureJsonProp(Structures.objectifs),
        displayName: getDisplayNameProp('Confinement'),
    },
    gestionObjectifsAutre: {
        ...getBooleanProp('Autre'),
        structure: getStructureJsonProp(Structures.objectifs),
        displayName: getDisplayNameProp('Autre'),
    },

    gestionEtatDesLieuxAvantTravaux: {
        ...getBooleanProp('Etat des lieux avant travaux'),
        structure: getStructureJsonProp(Structures.gestion),
        displayName: getDisplayNameProp('Etat des lieux avant travaux'),
    },

    gestionOperationsPiegeage: {
        ...getBooleanProp('Piégeage'),
        structure: getStructureJsonProp(Structures.operations),
        displayName: getDisplayNameProp('Piégeage'),
    },

    gestionOperationsAbattage: {
        ...getBooleanProp('Abattage'),
        structure: getStructureJsonProp(Structures.operations),
        displayName: getDisplayNameProp('Abattage'),
    },
    gestionOperationsLutteChimique: {
        ...getBooleanProp('Lutte chimique'),
        structure: getStructureJsonProp(Structures.operations),
        displayName: getDisplayNameProp('Lutte chimique'),
    },
    gestionOperationsLutteBiologique: {
        ...getBooleanProp('Lutte biologique'),
        structure: getStructureJsonProp(Structures.operations),
        displayName: getDisplayNameProp('Lutte biologique'),
    },
    gestionOperationsAutre: {
        ...getBooleanProp('Autre'),
        structure: getStructureJsonProp(Structures.operations),
        displayName: getDisplayNameProp('Autre'),
    },

    gestionSuiviDesOperationAucun: {
        ...getBooleanProp('Auncun suivi'),
        structure: getStructureJsonProp(Structures.suiviDesOperation),
        displayName: getDisplayNameProp('Auncun suivi'),
    },
    gestionSuiviDesOperationPartiel: {
        ...getBooleanProp('Suivi partiel'),
        structure: getStructureJsonProp(Structures.suiviDesOperation),
        displayName: getDisplayNameProp('Suivi partiel'),
    },
    gestionSuiviDesOperationAvecRepasse: {
        ...getBooleanProp('Suivi avec repasse'),
        structure: getStructureJsonProp(Structures.suiviDesOperation),
        displayName: getDisplayNameProp('Suivi avec repasse'),
    },
    gestionSuiviDesOperationDetail: {
        ...getBooleanProp('Detail'),
        structure: getStructureJsonProp(Structures.suiviDesOperation),
        displayName: getDisplayNameProp('Detail'),
    },

    gestionDevenirDesEspecesMiseAMort: {
        ...getBooleanProp('Mise à mort'),
        structure: getStructureJsonProp(Structures.devenirDesEspeces),
        displayName: getDisplayNameProp('Mise à mort'),
    },
    gestionDevenirDesEspecesTransfertDansUnRefuge: {
        ...getBooleanProp('Transfert dans un refuge'),
        structure: getStructureJsonProp(Structures.devenirDesEspeces),
        displayName: getDisplayNameProp('Transfert dans un refuge'),
    },
    gestionDevenirDesEspecesAutre: {
        ...getBooleanProp('Autre'),
        structure: getStructureJsonProp(Structures.devenirDesEspeces),
        displayName: getDisplayNameProp('Autre'),
    },

    communicationInformation: {
        ...getBooleanProp('Information'),
        structure: getStructureJsonProp(Structures.communication),
        displayName: getDisplayNameProp('Information'),
    },
    communicationSensibilisation: {
        ...getBooleanProp('Sensibilisation'),
        structure: getStructureJsonProp(Structures.communication),
        displayName: getDisplayNameProp('Sensibilisation'),
    },
    communicationFormation: {
        ...getBooleanProp('Formation'),
        structure: getStructureJsonProp(Structures.communication),
        displayName: getDisplayNameProp('Formation'),
    },
    communicationAutre: {
        ...getBooleanProp('Autre'),
        structure: getStructureJsonProp(Structures.communication),
        displayName: getDisplayNameProp('Autre'),
    },
    communicationLienVersRessources: {
        ...getSimpleTextProp('Lien vers les ressources'),
        structure: getStructureJsonProp(Structures.communication),
        displayName: getDisplayNameProp('Lien vers les ressources'),
    },
    // #endregion

    // #region RESULTATS ET BILAN
    resultats: {
        ...getSimpleTextProp('Résultats'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Résultats'),
    },
    bilan: {
        ...getSimpleTextProp('Bilan'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Bilan'),
    },
    valorisationDesActions: {
        ...getSimpleTextProp('Valorisation des actions'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Valorisation des actions'),
    },
    productionAssociée: {
        ...getSimpleTextProp('Production(s) associée(s)'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Production(s) associée(s)'),
    },
    pointsDeVigilances: {
        ...getSimpleTextProp('Points de vigilances'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Points de vigilances'),
    },
    enseignementDuProjet: {
        ...getSimpleTextProp('Enseignement du projet'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Enseignement du projet'),
    },
    perspectives: {
        ...getSimpleTextProp('Perspectives'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Perspectives'),
    },
    réglementation: {
        ...getSimpleTextProp('Réglementation'),
        structure: getStructureJsonProp(Structures.resultatEtBilan),
        displayName: getDisplayNameProp('Réglementation'),
    },
    // #endregion

    // #region FICHE REX
    autorisationDePublicationSurLeSiteDeLARBE: {
        ...getBooleanProp("Autorisation de publication sur le site de l'ARBE"),
        structure: getStructureJsonProp(Structures.ficheRex),
        displayName: getDisplayNameProp("Autorisation de publication sur le site de l'ARBE"),
    },
    dateRedaction: {
        ...getDateProp('Date rédaction'),
        structure: getStructureJsonProp(Structures.ficheRex),
        displayName: getDisplayNameProp('Date rédaction'),
    },
    nomRedacteur: {
        ...getSimpleTextProp('Nom(s) rédacteur(s)'),
        structure: getStructureJsonProp(Structures.ficheRex),
        displayName: getDisplayNameProp('Nom(s) rédacteur(s)'),
    },
    nomRelecteur: {
        ...getSimpleTextProp('Nom(s) relecteur'),
        structure: getStructureJsonProp(Structures.ficheRex),
        displayName: getDisplayNameProp('Nom(s) relecteur'),
    },
    fichePublieeSurLeSiteDeLARBE: {
        ...getSimpleTextProp("Fiche publiée sur le site de l'ARBE"),
        structure: getStructureJsonProp(Structures.ficheRex),
        displayName: getDisplayNameProp("Fiche publiée sur le site de l'ARBE"),
    },
    datePublication: {
        ...getDateProp('Date publication'),
        structure: getStructureJsonProp(Structures.ficheRex),
        displayName: getDisplayNameProp('Date publication'),
    },
    // #endregion
};

import { StellioTemplate } from '../../interfaces';
import {
    getDisplayNameProp,
    getEnumProp,
    getSimpleTextProp,
    getClassificationJsonProp,
    presenceAbsenceEnumValues,
    getDateProp,
    filtreXEnumValues,
    incertitudeEnumValues,
    probabiliteEnumValues,
    getIntegerProp,
} from './utils';
import * as Structures from './speciesDataStructures';

export const SpeciesTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Species:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Species',
            title: 'Espèce',
            required: ['nomValide'],
            minimum: 1,
            description:
                "Entité représentant une espèce animale exotique envahissante et regroupant toutes les informations connues sur l'espèce",
        },
    },

    // #region FICHE ESPÈCE
    affichageSurSiteArbe: {
        ...getEnumProp("Affichage sur site de l'ARBE", ['Oui', 'Non', 'En cours', 'A faire', 'NA']),
        classification: getClassificationJsonProp(Structures.ficheEspece),
        displayName: getDisplayNameProp("Affichage sur site de l'ARBE"),
    },
    datePremierePublication: {
        ...getDateProp('Date de première publication'),
        classification: getClassificationJsonProp(Structures.ficheEspece),
        displayName: getDisplayNameProp('Date de première publication'),
    },
    version: {
        ...getSimpleTextProp('Version'),
        classification: getClassificationJsonProp(Structures.ficheEspece),
        displayName: getDisplayNameProp('Version'),
    },
    dateDerniereMiseAJour: {
        ...getDateProp('Date de dernière mise à jour'),
        classification: getClassificationJsonProp(Structures.ficheEspece),
        displayName: getDisplayNameProp('Date de dernière mise à jour'),
    },
    auteur: {
        ...getSimpleTextProp('Auteur'),
        classification: getClassificationJsonProp(Structures.ficheEspece),
        displayName: getDisplayNameProp('Auteur'),
    },
    relecteur: {
        ...getSimpleTextProp('Relecteur(s)'),
        classification: getClassificationJsonProp(Structures.ficheEspece),
        displayName: getDisplayNameProp('Relecteur(s)'),
    },
    // #endregion

    // #region TAXONOMIE
    taxon: {
        ...getEnumProp("Taxon de l'espèce", [
            'Mammifere',
            'Oiseau',
            'Reptile',
            'Ampibien',
            'Poisson',
            'Crustacé',
            'Mollusque',
            'Arthropode',
            'Autre',
        ]),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Taxon'),
    },
    liste: {
        ...getEnumProp('Liste', [...filtreXEnumValues, 'A mettre à jour']),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Liste'),
    },
    ordre: {
        ...getSimpleTextProp('Ordre'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Ordre'),
    },
    famille: {
        ...getSimpleTextProp('Famille'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Famille'),
    },
    cdRef: {
        ...getSimpleTextProp('Code de référence'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('CD Ref'),
    },
    nomValide: {
        ...getSimpleTextProp('Nom valide'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Nom valide'),
    },
    nomVernaculaire: {
        ...getSimpleTextProp('Nom vernaculaire'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Nom vernaculaire'),
    },
    rang: {
        ...getEnumProp('Rang', ['OR', 'FN', 'SBFM', 'GN', 'SSGN', 'ES', 'SSES', 'FO', 'RACE', 'Autre']),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Rang'),
    },
    hybride: {
        ...getSimpleTextProp('Hybride'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Hybride'),
    },
    especeProtegee: {
        ...getEnumProp('Est-ce une espèce protégée ?', ['Oui', 'Non']),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Espèce protégée'),
    },
    filtreTaxonomique: {
        ...getEnumProp('Filtre taxonomique', filtreXEnumValues),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Filtre taxonomique'),
    },
    // #endregion

    // #region PRESENCE / ABSENCE
    source: {
        ...getSimpleTextProp('Source'),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Source'),
    },
    region: {
        ...getEnumProp('Région', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Région'),
    },
    '04': {
        ...getEnumProp('04', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('04'),
    },
    '05': {
        ...getEnumProp('05', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('05'),
    },
    '06': {
        ...getEnumProp('06', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('06'),
    },
    '13': {
        ...getEnumProp('13', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('13'),
    },
    '83': {
        ...getEnumProp('83', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('83'),
    },
    '84': {
        ...getEnumProp('84', presenceAbsenceEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('84'),
    },
    remarquesPresenceAbsence: {
        ...getSimpleTextProp('Remarques sur la présence/absence'),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreDePresence: {
        ...getEnumProp('Filtre de présence', filtreXEnumValues),
        classification: getClassificationJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Filtre de présence'),
    },
    // #endregion

    // #region INDIGENAT
    statutPresenceREG: {
        ...getSimpleTextProp('Statut de présence REG'),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Statut présence REG'),
    },
    statutBiologique: {
        ...getSimpleTextProp('Statut biologique'),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Statut biologique'),
    },
    indigenat: {
        ...getEnumProp('Indigénat', ['Indigène', 'Exogène', 'Cryptogène', 'Inconnu', 'A évaluer']),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Indigénat'),
    },
    categorie: {
        ...getEnumProp('Catégorie', ['Archéozoaire', 'Néozoaire', 'Inconnu', 'A évaluer', 'NA']),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Catégorie'),
    },
    sourceIndigenat: {
        ...getSimpleTextProp('Source indigénat'),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Source indigénat'),
    },
    periodeEtLieuDIntroduction: {
        ...getSimpleTextProp("Période et lieu d'introduction (France et régions)"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Période et lieu d'introduction (France et régions)"),
    },
    sourcePeriodeEtLieuDIntroduction: {
        ...getSimpleTextProp("Source période et lieu d'introduction (France et régions)"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Source période et lieu d'introduction (France et régions)"),
    },
    aireDorigine: {
        ...getSimpleTextProp("Aire d'origine"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Aire d'origine"),
    },
    sourceAireDorigine: {
        ...getSimpleTextProp("Source aire d'origine"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Source aire d'origine"),
    },
    datePremiereEntreeSileneRegionSud: {
        ...getDateProp('Date de la première entrée Silène en région Sud'),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Date première entrée Silène région Sud'),
    },
    remarquesIndigenat: {
        ...getSimpleTextProp("Remarques sur l'indigénat"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreIndigenat: {
        ...getEnumProp("Filtre d'indigénat", filtreXEnumValues),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Filtre d'indigénat"),
    },

    // #endregion

    // #region AUTONOMIE
    spontaneite: {
        ...getEnumProp('Spontanéité', ['Taxon sauvage', 'Taxon féral', 'Taxon domestiqué', 'Inconnu', 'NA']),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Spontanéité'),
    },
    sourceSpontaneite: {
        ...getSimpleTextProp('Source spontanéité'),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source spontanéité'),
    },
    autonomie: {
        ...getEnumProp('Autonomie', [
            'Captif',
            'Autonome',
            'Accidentel',
            'Acclimaté',
            'Etabli',
            'Inconnu',
            'A évaluer',
        ]),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Autonomie'),
    },
    sourceAutonomie: {
        ...getSimpleTextProp('Source autonomie'),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source autonomie'),
    },
    remarquesAutonomie: {
        ...getSimpleTextProp("Remarques sur l'autonomie"),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreDAutonomie: {
        ...getSimpleTextProp("Filtre d'autonomie"),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp("Filtre d'autonomie"),
    },

    // #endregion

    // #region INFORMATION SUPPLEMENTAIRES
    habitat: {
        ...getEnumProp('Habitat', [
            'Marin',
            'Eau douce',
            'Terrestre',
            'Marin et eau douce',
            'Marin et terrestre',
            'Eau saumâtre',
            'Continental',
            'A évaluer',
            'Inconnu',
        ]),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Habitat'),
    },
    statutBiogeographiqueEnFrance: {
        ...getEnumProp('Statut biogéographique en France', [
            'Présent (indigène ou indéterminé)',
            'Endémique',
            'Subendémique',
            'Cryptogène',
            'Introduit',
            'Introduit envahissant',
            'Introduit non établi (dont cultivé / domestique)',
            'Occasionnel',
            'Douteux',
            'Mentionné par erreur',
            'Absent',
            'Disparu',
            'Eteint',
            'Introduit éteint',
            'Inconnu',
            'A évaluer',
            'Inconnu',
        ]),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Statut biogéographique en France'),
    },
    interditDintroduction: {
        ...getSimpleTextProp("Interdit d'introduction"),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Interdit d'introduction"),
    },
    arreteMinisterielle: {
        ...getEnumProp('Arrêté ministériel', ['Oui', 'Non', 'A évaluer']),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Arrêté ministériel'),
    },
    listeOccitanie: {
        ...getSimpleTextProp("Liste d'Occitanie"),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Liste Occitanie'),
    },
    auvergneRhoneAlpes: {
        ...getSimpleTextProp('Auvergne-Rhône-Alpes'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Auvergne-Rhône-Alpes'),
    },
    italieRegionsLimitrophes: {
        ...getSimpleTextProp('Italie - Régions limitrophes'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Italie - Régions limitrophes'),
    },
    lienCentreDeRessource: {
        ...getSimpleTextProp('Lien vers centre de ressource'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Lien centre de ressource'),
    },
    lienINPN: {
        ...getSimpleTextProp('Lien vers INPN'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Lien INPN'),
    },
    complementsInfo: {
        ...getSimpleTextProp("Compléments d'information"),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Compléments d'information"),
    },
    listeDeTravail: {
        ...getEnumProp('Liste de travail', [...filtreXEnumValues, 'A mettre à jour']),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Liste de travail'),
    },

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS ENVIRONNEMENTAUX
    scorePotentielDeProliferation: {
        ...getIntegerProp('Score du potentiel de prolifération'),
        classification: getClassificationJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePotentielDeProliferation: {
        ...getEnumProp("Niveau d'incertitude du potentiel de prolifération", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPotentielDeProliferation: {
        ...getSimpleTextProp('Commentaires sur le potentiel de prolifération'),
        classification: getClassificationJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreColonisationHabitatsNaturels: {
        ...getIntegerProp('Score de colonisation des habitats naturels'),
        classification: getClassificationJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeColonisationHabitatsNaturels: {
        ...getEnumProp("Niveau d'incertitude de colonisation des habitats naturels", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesColonisationHabitatsNaturels: {
        ...getSimpleTextProp('Commentaires sur la colonisation des habitats naturels'),
        classification: getClassificationJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePredation: {
        ...getIntegerProp('Score de prédation'),
        classification: getClassificationJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePredation: {
        ...getEnumProp("Niveau d'incertitude de prédation", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.predation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPredation: {
        ...getSimpleTextProp('Commentaires sur la prédation'),
        classification: getClassificationJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCompetition: {
        ...getIntegerProp('Score de compétition'),
        classification: getClassificationJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCompetition: {
        ...getEnumProp("Niveau d'incertitude de compétition", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.competition),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCompetition: {
        ...getSimpleTextProp('Commentaires sur la compétition'),
        classification: getClassificationJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreMaladies: {
        ...getIntegerProp('Score de maladies'),
        classification: getClassificationJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeMaladies: {
        ...getEnumProp("Niveau d'incertitude de maladies", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.maladies),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesMaladies: {
        ...getSimpleTextProp('Commentaires sur les maladies'),
        classification: getClassificationJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreHybridation: {
        ...getIntegerProp("Score d'hybridation"),
        classification: getClassificationJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeHybridation: {
        ...getEnumProp("Niveau d'incertitude de hybridation", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesHybridation: {
        ...getSimpleTextProp("Commentaires sur l'hybridation"),
        classification: getClassificationJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCyclesNaturels: {
        ...getIntegerProp('Score de cycles naturels'),
        classification: getClassificationJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCyclesNaturels: {
        ...getEnumProp("Niveau d'incertitude de cycles naturels", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCyclesNaturels: {
        ...getSimpleTextProp('Commentaires sur les cycles naturels'),
        classification: getClassificationJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAlterationsPhysiques: {
        ...getIntegerProp('Score alterations physiques'),
        classification: getClassificationJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAlterationsPhysiques: {
        ...getEnumProp("Niveau d'incertitude alterations physiques", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAlterationsPhysiques: {
        ...getSimpleTextProp('Commentaires sur alterations physiques'),
        classification: getClassificationJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSuccessionEcologiques: {
        ...getIntegerProp('Score succession écologiques'),
        classification: getClassificationJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSuccessionEcologiques: {
        ...getEnumProp("Niveau d'incertitude succession écologiques", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSuccessionEcologiques: {
        ...getSimpleTextProp('Commentaires sur succession écologiques'),
        classification: getClassificationJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreReseauxTrophiques: {
        ...getIntegerProp('Score réseaux trophiques'),
        classification: getClassificationJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeReseauxTrophiques: {
        ...getEnumProp("Niveau d'incertitude réseaux trophiques", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesReseauxTrophiques: {
        ...getSimpleTextProp('Commentaires sur réseaux trophiques'),
        classification: getClassificationJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreISEIA: {
        ...getSimpleTextProp('Score ISEIA'),
        classification: getClassificationJsonProp(Structures.analyseIntensiteImpactsEnvironnementaux),
        displayName: getDisplayNameProp('Score ISEIA'),
    },
    impactsDocumentesISEIA: {
        ...getEnumProp('Impacts documentés', ['Oui', 'Non', 'A faire', 'NA']),
        classification: getClassificationJsonProp(Structures.analyseIntensiteImpactsEnvironnementaux),
        displayName: getDisplayNameProp('Impacts documentés'),
    },
    intensiteImpactsNegatifsEnvironnement: {
        ...getSimpleTextProp("Intensité des impacts négatifs sur l'environnement"),
        classification: getClassificationJsonProp(Structures.analyseIntensiteImpactsEnvironnementaux),
        displayName: getDisplayNameProp("Intensité des impacts négatifs sur l'environnement"),
    },

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS SOCIO-ECONOMIQUES SANITAIRES
    scoreImpactsSurEconomie: {
        ...getIntegerProp("Score impacts sur l'économie"),
        classification: getClassificationJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSurEconomie: {
        ...getEnumProp("Niveau d'incertitude impacts sur l'économie", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSurEconomie: {
        ...getSimpleTextProp("Commentaires sur impacts sur l'économie"),
        classification: getClassificationJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreImpactsSanitaires: {
        ...getIntegerProp('Score impacts sanitaires'),
        classification: getClassificationJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSanitaires: {
        ...getEnumProp("Niveau d'incertitude impacts sanitaires", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSanitaires: {
        ...getSimpleTextProp('Commentaires sur impacts sanitaires'),
        classification: getClassificationJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAgriculture: {
        ...getIntegerProp('Score agriculture'),
        classification: getClassificationJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAgriculture: {
        ...getEnumProp("Niveau d'incertitude agriculture", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAgriculture: {
        ...getSimpleTextProp('Commentaires sur agriculture'),
        classification: getClassificationJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreForesterie: {
        ...getIntegerProp('Score foresterie'),
        classification: getClassificationJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeForesterie: {
        ...getEnumProp("Niveau d'incertitude foresterie", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesForesterie: {
        ...getSimpleTextProp('Commentaires sur foresterie'),
        classification: getClassificationJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAquaculture: {
        ...getIntegerProp('Score aquaculture'),
        classification: getClassificationJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAquaculture: {
        ...getEnumProp("Niveau d'incertitude aquaculture", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAquaculture: {
        ...getSimpleTextProp('Commentaires sur aquaculture'),
        classification: getClassificationJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreIndustrie: {
        ...getIntegerProp('Score industrie'),
        classification: getClassificationJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeIndustrie: {
        ...getEnumProp("Niveau d'incertitude industrie", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.industrie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesIndustrie: {
        ...getSimpleTextProp('Commentaires sur industrie'),
        classification: getClassificationJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePatrimoine: {
        ...getIntegerProp('Score patrimoine'),
        classification: getClassificationJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePatrimoine: {
        ...getEnumProp("Niveau d'incertitude patrimoine", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPatrimoine: {
        ...getSimpleTextProp('Commentaires sur patrimoine'),
        classification: getClassificationJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSecurite: {
        ...getIntegerProp('Score sécurité'),
        classification: getClassificationJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSecurite: {
        ...getEnumProp("Niveau d'incertitude sécurité", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.securite),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSecurite: {
        ...getSimpleTextProp('Commentaires sur sécurité'),
        classification: getClassificationJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreLoisirs: {
        ...getIntegerProp('Score loisirs'),
        classification: getClassificationJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeLoisirs: {
        ...getEnumProp("Niveau d'incertitude loisirs", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesLoisirs: {
        ...getSimpleTextProp('Commentaires sur loisirs'),
        classification: getClassificationJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAmenites: {
        ...getIntegerProp('Score aménities'),
        classification: getClassificationJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAmenites: {
        ...getEnumProp("Niveau d'incertitude aménities", incertitudeEnumValues),
        classification: getClassificationJsonProp(Structures.amenites),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAmenites: {
        ...getSimpleTextProp('Commentaires sur aménities'),
        classification: getClassificationJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreISSIA: {
        ...getSimpleTextProp('Score ISSIA'),
        classification: getClassificationJsonProp(Structures.impactSurBienEtreHumain),
        displayName: getDisplayNameProp('Score ISSIA'),
    },
    impactsDocumentesISSIA: {
        ...getEnumProp('Impacts documentés', ['Oui', 'Non', 'A faire', 'NA']),
        classification: getClassificationJsonProp(Structures.impactSurBienEtreHumain),
        displayName: getDisplayNameProp('Impacts documentés'),
    },

    intensiteImpactsSocioEconomiquesSanitaires: {
        ...getEnumProp('Intensité des impacts négatifs socio-économiques sanitaires', ['Élevée', 'Modérée', 'Faible']),
        classification: getClassificationJsonProp(Structures.analyseIntensiteImpactsSocioEconomiquesSanitaires),
        displayName: getDisplayNameProp('Intensité des impacts négatifs'),
    },

    // #endregion

    // #region ANALYSE DE RISQUES DES TAXONS EVALUES
    probabiliteIntroductionVolontaire: {
        ...getEnumProp("Probabilité d'introduction volontaire", probabiliteEnumValues),
        classification: getClassificationJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionVolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction volontaire"),
        classification: getClassificationJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probabiliteIntroductionInvolontaire: {
        ...getEnumProp("Probabilité d'introduction involontaire", probabiliteEnumValues),
        classification: getClassificationJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionInvolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction involontaire"),
        classification: getClassificationJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probabiliteLimitrophe: {
        ...getEnumProp('Probabilité limitrophe', probabiliteEnumValues),
        classification: getClassificationJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Limitrophe'),
    },
    commentairesLimitrophe: {
        ...getSimpleTextProp('Commentaires sur la limitrophe'),
        classification: getClassificationJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probaMax: {
        ...getEnumProp('Probabilité MAX', probabiliteEnumValues),
        classification: getClassificationJsonProp(Structures.analyseRisquesDesTaxonsEvalues),
        displayName: getDisplayNameProp('Proba Max'),
    },

    // #endregion

    // #region CRITERES INFORMATIFS
    scoreDistributionSpatiale: {
        ...getEnumProp('Score distribution spatiale', ['Absente', 'Rare', 'Répandue', 'Très répandue', 'NA']),
        classification: getClassificationJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesDistributionSpatiale: {
        ...getSimpleTextProp('Commentaires sur distribution spatiale'),
        classification: getClassificationJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCoefficientDabondance: {
        ...getEnumProp("Score coefficient d'abondance", [
            'Absente',
            'Peu abondante',
            'Abondante',
            'Très abondante',
            'NA',
        ]),
        classification: getClassificationJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesCoefficientDabondance: {
        ...getSimpleTextProp("Commentaires sur coefficient d'abondance"),
        classification: getClassificationJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Commentaires'),
    },
    // #endregion

    // #region ANALYSE FINALE
    impactsIrreversibles: {
        ...getSimpleTextProp('Impacts irréversibles'),
        classification: getClassificationJsonProp(Structures.analyseFinale),
        displayName: getDisplayNameProp('Impacts irréversibles'),
    },
    analyseDesRisquesDesTaxonsEvalues: {
        ...getSimpleTextProp('Analyse des risques des taxons évalués'),
        classification: getClassificationJsonProp(Structures.analyseFinale),
        displayName: getDisplayNameProp('Analyse des risques des taxons évalués'),
    },
    consequence: {
        ...getSimpleTextProp('Conséquence'),
        classification: getClassificationJsonProp(Structures.analyseFinale),
        displayName: getDisplayNameProp('Conséquence'),
    },

    categorieFinale: {
        ...getSimpleTextProp('Catégorie'),
        classification: getClassificationJsonProp(Structures.analyseFinale),
        displayName: getDisplayNameProp('Catégorie'),
    },
    categorieAjustee: {
        ...getEnumProp('Catégorie ajustée', [
            'Majeure',
            'Modérée',
            'Emergente',
            'Alerte',
            'Prévention',
            'Exotique non envahissante',
            'NA',
            'A évaluer',
        ]),
        classification: getClassificationJsonProp(Structures.analyseFinale),
        displayName: getDisplayNameProp('Catégorie ajustée'),
    },
    categorieAffichee: {
        ...getEnumProp('Catégorie affichée', [
            'Majeure',
            'Modérée',
            'Emergente',
            'Alerte',
            'Prévention',
            'Exotique non envahissante',
            'NA',
            'A évaluer',
        ]),
        classification: getClassificationJsonProp(Structures.analyseFinale),
        displayName: getDisplayNameProp('Catégorie affichée'),
    },
    // #endregion
};

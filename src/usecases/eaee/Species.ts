import { StellioTemplate } from '../../interfaces';
import {
    getBooleanProp,
    getDisplayNameProp,
    getEnumProp,
    getNumberProp,
    getSimpleTextProp,
    getClassificationJsonProp,
    presenceAbsenceEnumValues,
    getDateProp,
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

    // #region TAXONOMIE
    taxon: {
        ...getEnumProp("Taxon de l'espèce", ['Mammifère', 'Oiseau', 'Reptile', 'Amphibien', 'Poisson', 'Insecte']),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Taxon'),
    },

    liste: {
        ...getSimpleTextProp('Liste'),
        classification: getClassificationJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Liste'),
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
        ...getSimpleTextProp('Rang'),
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
        ...getBooleanProp('Filtre taxonomique'),
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
        ...getBooleanProp('Filtre de présence'),
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
        ...getSimpleTextProp('Indigénat'),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Indigénat'),
    },
    categorie: {
        ...getSimpleTextProp('Catégorie'),
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
    datePremiereEntreeSileneRegionSud: {
        ...getDateProp('Date de la première entrée Silène en région Sud'),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Date première entrée Silène région Sud'),
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
    remarquesIndigenat: {
        ...getSimpleTextProp("Remarques sur l'indigénat"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreIndigenat: {
        ...getBooleanProp("Filtre d'indigénat"),
        classification: getClassificationJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Filtre d'indigénat"),
    },

    // #endregion

    // #region AUTONOMIE
    spontaneite: {
        ...getSimpleTextProp('Spontanéité'),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Spontanéité'),
    },
    sourceSpontaneite: {
        ...getSimpleTextProp('Source spontanéité'),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source spontanéité'),
    },
    autonomie: {
        ...getSimpleTextProp('Autonomie'),
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
        ...getBooleanProp("Filtre d'autonomie"),
        classification: getClassificationJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp("Filtre d'autonomie"),
    },

    // #endregion

    // #region INFORMATION SUPPLEMENTAIRES
    habitat: {
        ...getSimpleTextProp('Habitat'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Habitat'),
    },
    statutBiogéographiqueEnFrance: {
        ...getSimpleTextProp('Statut biogéographique en France'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Statut biogéographique en France'),
    },
    interditDintroduction: {
        ...getSimpleTextProp("Interdit d'introduction"),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Interdit d'introduction"),
    },
    arreteMinisterielle: {
        ...getSimpleTextProp('Arrêté ministériel'),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Arrêté ministériel'),
    },
    listeOccitanie: {
        ...getSimpleTextProp("Liste d'Occitanie"),
        classification: getClassificationJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Liste Occitanie'),
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

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS ENVIRONNEMENTAUX
    scorePotentielDeProliferation: {
        ...getNumberProp('Score du potentiel de prolifération'),
        classification: getClassificationJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePotentielDeProliferation: {
        ...getSimpleTextProp("Niveau d'incertitude du potentiel de prolifération"),
        classification: getClassificationJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPotentielDeProliferation: {
        ...getSimpleTextProp('Commentaires sur le potentiel de prolifération'),
        classification: getClassificationJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreColonisationHabitatsNaturels: {
        ...getNumberProp('Score de colonisation des habitats naturels'),
        classification: getClassificationJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeColonisationHabitatsNaturels: {
        ...getSimpleTextProp("Niveau d'incertitude de colonisation des habitats naturels"),
        classification: getClassificationJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesColonisationHabitatsNaturels: {
        ...getSimpleTextProp('Commentaires sur la colonisation des habitats naturels'),
        classification: getClassificationJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePredation: {
        ...getNumberProp('Score de prédation'),
        classification: getClassificationJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePredation: {
        ...getSimpleTextProp("Niveau d'incertitude de prédation"),
        classification: getClassificationJsonProp(Structures.predation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPredation: {
        ...getSimpleTextProp('Commentaires sur la prédation'),
        classification: getClassificationJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCompetition: {
        ...getNumberProp('Score de compétition'),
        classification: getClassificationJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCompetition: {
        ...getSimpleTextProp("Niveau d'incertitude de compétition"),
        classification: getClassificationJsonProp(Structures.competition),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCompetition: {
        ...getSimpleTextProp('Commentaires sur la compétition'),
        classification: getClassificationJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreMaladies: {
        ...getNumberProp('Score de maladies'),
        classification: getClassificationJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeMaladies: {
        ...getSimpleTextProp("Niveau d'incertitude de maladies"),
        classification: getClassificationJsonProp(Structures.maladies),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesMaladies: {
        ...getSimpleTextProp('Commentaires sur les maladies'),
        classification: getClassificationJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreHybridation: {
        ...getNumberProp("Score d'hybridation"),
        classification: getClassificationJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeHybridation: {
        ...getSimpleTextProp("Niveau d'incertitude de hybridation"),
        classification: getClassificationJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesHybridation: {
        ...getSimpleTextProp("Commentaires sur l'hybridation"),
        classification: getClassificationJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCyclesNaturels: {
        ...getNumberProp('Score de cycles naturels'),
        classification: getClassificationJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCyclesNaturels: {
        ...getSimpleTextProp("Niveau d'incertitude de cycles naturels"),
        classification: getClassificationJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCyclesNaturels: {
        ...getSimpleTextProp('Commentaires sur les cycles naturels'),
        classification: getClassificationJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAlterationsPhysiques: {
        ...getNumberProp('Score alterations physiques'),
        classification: getClassificationJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAlterationsPhysiques: {
        ...getSimpleTextProp("Niveau d'incertitude alterations physiques"),
        classification: getClassificationJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAlterationsPhysiques: {
        ...getSimpleTextProp('Commentaires sur alterations physiques'),
        classification: getClassificationJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSuccessionEcologiques: {
        ...getNumberProp('Score succession écologiques'),
        classification: getClassificationJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSuccessionEcologiques: {
        ...getSimpleTextProp("Niveau d'incertitude succession écologiques"),
        classification: getClassificationJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSuccessionEcologiques: {
        ...getSimpleTextProp('Commentaires sur succession écologiques'),
        classification: getClassificationJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreReseauxTrophiques: {
        ...getNumberProp('Score réseaux trophiques'),
        classification: getClassificationJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeReseauxTrophiques: {
        ...getSimpleTextProp("Niveau d'incertitude réseaux trophiques"),
        classification: getClassificationJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesReseauxTrophiques: {
        ...getSimpleTextProp('Commentaires sur réseaux trophiques'),
        classification: getClassificationJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    impactsEnvironnementauxNoteGlobale: {
        ...getSimpleTextProp('Impacts environnementaux note globale'),
        classification: getClassificationJsonProp(Structures.analyseIntensiteImpactsEnvironnementaux),
        displayName: getDisplayNameProp('Note globale'),
    },

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS SOCIO-ECONOMIQUES SANITAIRES
    scoreImpactsSurEconomie: {
        ...getNumberProp("Score impacts sur l'économie"),
        classification: getClassificationJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSurEconomie: {
        ...getSimpleTextProp("Niveau d'incertitude impacts sur l'économie"),
        classification: getClassificationJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSurEconomie: {
        ...getSimpleTextProp("Commentaires sur impacts sur l'économie"),
        classification: getClassificationJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreImpactsSanitaires: {
        ...getNumberProp('Score impacts sanitaires'),
        classification: getClassificationJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSanitaires: {
        ...getSimpleTextProp("Niveau d'incertitude impacts sanitaires"),
        classification: getClassificationJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSanitaires: {
        ...getSimpleTextProp('Commentaires sur impacts sanitaires'),
        classification: getClassificationJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAgriculture: {
        ...getNumberProp('Score agriculture'),
        classification: getClassificationJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAgriculture: {
        ...getSimpleTextProp("Niveau d'incertitude agriculture"),
        classification: getClassificationJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAgriculture: {
        ...getSimpleTextProp('Commentaires sur agriculture'),
        classification: getClassificationJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreForesterie: {
        ...getNumberProp('Score foresterie'),
        classification: getClassificationJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeForesterie: {
        ...getSimpleTextProp("Niveau d'incertitude foresterie"),
        classification: getClassificationJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesForesterie: {
        ...getSimpleTextProp('Commentaires sur foresterie'),
        classification: getClassificationJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAquaculture: {
        ...getNumberProp('Score aquaculture'),
        classification: getClassificationJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAquaculture: {
        ...getSimpleTextProp("Niveau d'incertitude aquaculture"),
        classification: getClassificationJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAquaculture: {
        ...getSimpleTextProp('Commentaires sur aquaculture'),
        classification: getClassificationJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreIndustrie: {
        ...getNumberProp('Score industrie'),
        classification: getClassificationJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeIndustrie: {
        ...getSimpleTextProp("Niveau d'incertitude industrie"),
        classification: getClassificationJsonProp(Structures.industrie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesIndustrie: {
        ...getSimpleTextProp('Commentaires sur industrie'),
        classification: getClassificationJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePatrimoine: {
        ...getNumberProp('Score patrimoine'),
        classification: getClassificationJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePatrimoine: {
        ...getSimpleTextProp("Niveau d'incertitude patrimoine"),
        classification: getClassificationJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPatrimoine: {
        ...getSimpleTextProp('Commentaires sur patrimoine'),
        classification: getClassificationJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSecurite: {
        ...getNumberProp('Score sécurité'),
        classification: getClassificationJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSecurite: {
        ...getSimpleTextProp("Niveau d'incertitude sécurité"),
        classification: getClassificationJsonProp(Structures.securite),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSecurite: {
        ...getSimpleTextProp('Commentaires sur sécurité'),
        classification: getClassificationJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreLoisirs: {
        ...getNumberProp('Score loisirs'),
        classification: getClassificationJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeLoisirs: {
        ...getSimpleTextProp("Niveau d'incertitude loisirs"),
        classification: getClassificationJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesLoisirs: {
        ...getSimpleTextProp('Commentaires sur loisirs'),
        classification: getClassificationJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAmenites: {
        ...getNumberProp('Score aménities'),
        classification: getClassificationJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAmenites: {
        ...getSimpleTextProp("Niveau d'incertitude aménities"),
        classification: getClassificationJsonProp(Structures.amenites),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAmenites: {
        ...getSimpleTextProp('Commentaires sur aménities'),
        classification: getClassificationJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Commentaires'),
    },

    impactsBienEtreHumainNoteGlobale: {
        ...getSimpleTextProp('Impacts bien-être humain note globale'),
        classification: getClassificationJsonProp(Structures.impactSurBienEtreHumain),
        displayName: getDisplayNameProp('Note globale'),
    },

    // #endregion

    // #region ANALYSE DE RISQUES DES TAXONS EVALUES
    probabiliteIntroductionVolontaire: {
        ...getSimpleTextProp("Probabilité d'introduction volontaire"),
        classification: getClassificationJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionVolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction volontaire"),
        classification: getClassificationJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probabiliteIntroductionInvolontaire: {
        ...getSimpleTextProp("Probabilité d'introduction involontaire"),
        classification: getClassificationJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionInvolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction involontaire"),
        classification: getClassificationJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    limitrophe: {
        ...getSimpleTextProp('Limitrophe'),
        classification: getClassificationJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Limitrophe'),
    },
    commentairesLimitrophe: {
        ...getSimpleTextProp('Commentaires sur la limitrophe'),
        classification: getClassificationJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probaMax: {
        ...getSimpleTextProp('Probabilité maximale'),
        classification: getClassificationJsonProp(Structures.analyseRisquesDesTaxonsEvalues),
        displayName: getDisplayNameProp('Proba Max'),
    },

    // #endregion

    // #region CRITERES INFORMATIFS
    scoreDistributionSpatiale: {
        ...getNumberProp('Score distribution spatiale'),
        classification: getClassificationJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesDistributionSpatiale: {
        ...getSimpleTextProp('Commentaires sur distribution spatiale'),
        classification: getClassificationJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCoefficientDabondance: {
        ...getNumberProp("Score coefficient d'abondance"),
        classification: getClassificationJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesCoefficientDabondance: {
        ...getSimpleTextProp("Commentaires sur coefficient d'abondance"),
        classification: getClassificationJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Commentaires'),
    },

    // #endregion
};

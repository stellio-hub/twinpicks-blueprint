import { StellioTemplate } from '../../interfaces';
import { getDisplayNameProp, getSimpleTextProp, getStructureJsonProp } from './utils';
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
        ...getSimpleTextProp("Taxon de l'espèce"),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Taxon'),
    },

    liste: {
        ...getSimpleTextProp('Liste'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Liste'),
    },

    cdRef: {
        ...getSimpleTextProp('Code de référence'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('CD Ref'),
    },

    nomValide: {
        ...getSimpleTextProp('Nom valide'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Nom valide'),
    },

    nomVernaculaire: {
        ...getSimpleTextProp('Nom vernaculaire'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Nom vernaculaire'),
    },

    rang: {
        ...getSimpleTextProp('Rang'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Rang'),
    },

    hybride: {
        ...getSimpleTextProp('Hybride'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Hybride'),
    },

    especeProtegee: {
        ...getSimpleTextProp('Est-ce une espèce protégée ?'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Espèce protégée'),
    },

    filtreTaxonomique: {
        ...getSimpleTextProp('Filtre taxonomique'),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Filtre taxonomique'),
    },

    // #endregion

    // #region PRESENCE / ABSENCE
    source: {
        ...getSimpleTextProp('Source'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Source'),
    },

    region: {
        ...getSimpleTextProp('Région'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Région'),
    },

    '04': {
        ...getSimpleTextProp('04'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('04'),
    },
    '05': {
        ...getSimpleTextProp('05'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('05'),
    },
    '06': {
        ...getSimpleTextProp('06'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('06'),
    },
    '13': {
        ...getSimpleTextProp('13'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('13'),
    },
    '83': {
        ...getSimpleTextProp('83'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('83'),
    },
    '84': {
        ...getSimpleTextProp('84'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('84'),
    },

    remarquesPresenceAbsence: {
        ...getSimpleTextProp('Remarques sur la présence/absence'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Remarques'),
    },

    filtreDePresence: {
        ...getSimpleTextProp('Filtre de présence'),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Filtre de présence'),
    },
    // #endregion

    // #region INDIGENAT
    statutPresenceREG: {
        ...getSimpleTextProp('Statut de présence REG'),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Statut présence REG'),
    },
    statutBiologique: {
        ...getSimpleTextProp('Statut biologique'),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Statut biologique'),
    },
    indigenat: {
        ...getSimpleTextProp('Indigénat'),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Indigénat'),
    },
    categorie: {
        ...getSimpleTextProp('Catégorie'),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Catégorie'),
    },
    sourceIndigenat: {
        ...getSimpleTextProp('Source indigénat'),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Source indigénat'),
    },
    periodeEtLieuDIntroduction: {
        ...getSimpleTextProp("Période et lieu d'introduction (France et régions)"),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Période et lieu d'introduction (France et régions)"),
    },
    sourcePeriodeEtLieuDIntroduction: {
        ...getSimpleTextProp("Source période et lieu d'introduction (France et régions)"),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Source période et lieu d'introduction (France et régions)"),
    },
    datePremiereEntreeSileneRegionSud: {
        ...getSimpleTextProp('Date de la première entrée Silène en région Sud'),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Date première entrée Silène région Sud'),
    },
    aireDorigine: {
        ...getSimpleTextProp("Aire d'origine"),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Aire d'origine"),
    },
    sourceAireDorigine: {
        ...getSimpleTextProp("Source aire d'origine"),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Source aire d'origine"),
    },
    remarquesIndigenat: {
        ...getSimpleTextProp("Remarques sur l'indigénat"),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreIndigenat: {
        ...getSimpleTextProp("Filtre d'indigénat"),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Filtre d'indigénat"),
    },

    // #endregion

    // #region AUTONOMIE
    spontaneite: {
        ...getSimpleTextProp('Spontanéité'),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Spontanéité'),
    },
    sourceSpontaneite: {
        ...getSimpleTextProp('Source spontanéité'),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source spontanéité'),
    },
    autonomie: {
        ...getSimpleTextProp('Autonomie'),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Autonomie'),
    },
    sourceAutonomie: {
        ...getSimpleTextProp('Source autonomie'),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source autonomie'),
    },
    remarquesAutonomie: {
        ...getSimpleTextProp("Remarques sur l'autonomie"),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreDAutonomie: {
        ...getSimpleTextProp("Filtre d'autonomie"),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp("Filtre d'autonomie"),
    },

    // #endregion

    // #region INFORMATION SUPPLEMENTAIRES
    habitat: {
        ...getSimpleTextProp('Habitat'),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Habitat'),
    },
    statutBiogéographiqueEnFrance: {
        ...getSimpleTextProp('Statut biogéographique en France'),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Statut biogéographique en France'),
    },
    interditDintroduction: {
        ...getSimpleTextProp("Interdit d'introduction"),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Interdit d'introduction"),
    },
    arreteMinisterielle: {
        ...getSimpleTextProp('Arrêté ministériel'),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Arrêté ministériel'),
    },
    listeOccitanie: {
        ...getSimpleTextProp("Liste d'Occitanie"),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Liste Occitanie'),
    },
    lienCentreDeRessource: {
        ...getSimpleTextProp('Lien vers centre de ressource'),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Lien centre de ressource'),
    },
    lienINPN: {
        ...getSimpleTextProp('Lien vers INPN'),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Lien INPN'),
    },
    complementsInfo: {
        ...getSimpleTextProp("Compléments d'information"),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Compléments d'information"),
    },

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS ENVIRONNEMENTAUX
    scorePotentielDeProliferation: {
        ...getSimpleTextProp('Score du potentiel de prolifération'),
        structure: getStructureJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePotentielDeProliferation: {
        ...getSimpleTextProp("Niveau d'incertitude du potentiel de prolifération"),
        structure: getStructureJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPotentielDeProliferation: {
        ...getSimpleTextProp('Commentaires sur le potentiel de prolifération'),
        structure: getStructureJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreColonisationHabitatsNaturels: {
        ...getSimpleTextProp('Score de colonisation des habitats naturels'),
        structure: getStructureJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeColonisationHabitatsNaturels: {
        ...getSimpleTextProp("Niveau d'incertitude de colonisation des habitats naturels"),
        structure: getStructureJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesColonisationHabitatsNaturels: {
        ...getSimpleTextProp('Commentaires sur la colonisation des habitats naturels'),
        structure: getStructureJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePredation: {
        ...getSimpleTextProp('Score de prédation'),
        structure: getStructureJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePredation: {
        ...getSimpleTextProp("Niveau d'incertitude de prédation"),
        structure: getStructureJsonProp(Structures.predation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPredation: {
        ...getSimpleTextProp('Commentaires sur la prédation'),
        structure: getStructureJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCompetition: {
        ...getSimpleTextProp('Score de compétition'),
        structure: getStructureJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCompetition: {
        ...getSimpleTextProp("Niveau d'incertitude de compétition"),
        structure: getStructureJsonProp(Structures.competition),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCompetition: {
        ...getSimpleTextProp('Commentaires sur la compétition'),
        structure: getStructureJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreMaladies: {
        ...getSimpleTextProp('Score de maladies'),
        structure: getStructureJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeMaladies: {
        ...getSimpleTextProp("Niveau d'incertitude de maladies"),
        structure: getStructureJsonProp(Structures.maladies),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesMaladies: {
        ...getSimpleTextProp('Commentaires sur les maladies'),
        structure: getStructureJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreHybridation: {
        ...getSimpleTextProp("Score d'hybridation"),
        structure: getStructureJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeHybridation: {
        ...getSimpleTextProp("Niveau d'incertitude de hybridation"),
        structure: getStructureJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesHybridation: {
        ...getSimpleTextProp("Commentaires sur l'hybridation"),
        structure: getStructureJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCyclesNaturels: {
        ...getSimpleTextProp('Score de cycles naturels'),
        structure: getStructureJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCyclesNaturels: {
        ...getSimpleTextProp("Niveau d'incertitude de cycles naturels"),
        structure: getStructureJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCyclesNaturels: {
        ...getSimpleTextProp('Commentaires sur les cycles naturels'),
        structure: getStructureJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAlterationsPhysiques: {
        ...getSimpleTextProp('Score alterations physiques'),
        structure: getStructureJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAlterationsPhysiques: {
        ...getSimpleTextProp("Niveau d'incertitude alterations physiques"),
        structure: getStructureJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAlterationsPhysiques: {
        ...getSimpleTextProp('Commentaires sur alterations physiques'),
        structure: getStructureJsonProp(Structures.alterationsPhysiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSuccessionEcologiques: {
        ...getSimpleTextProp('Score succession écologiques'),
        structure: getStructureJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSuccessionEcologiques: {
        ...getSimpleTextProp("Niveau d'incertitude succession écologiques"),
        structure: getStructureJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSuccessionEcologiques: {
        ...getSimpleTextProp('Commentaires sur succession écologiques'),
        structure: getStructureJsonProp(Structures.successionEcologiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreReseauxTrophiques: {
        ...getSimpleTextProp('Score réseaux trophiques'),
        structure: getStructureJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeReseauxTrophiques: {
        ...getSimpleTextProp("Niveau d'incertitude réseaux trophiques"),
        structure: getStructureJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesReseauxTrophiques: {
        ...getSimpleTextProp('Commentaires sur réseaux trophiques'),
        structure: getStructureJsonProp(Structures.reseauxTrophiques),
        displayName: getDisplayNameProp('Commentaires'),
    },

    impactsEnvironnementauxNoteGlobale: {
        ...getSimpleTextProp('Impacts environnementaux note globale'),
        structure: getStructureJsonProp(Structures.analyseIntensiteImpactsEnvironnementaux),
        displayName: getDisplayNameProp('Note globale'),
    },

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS SOCIO-ECONOMIQUES SANITAIRES
    scoreImpactsSurEconomie: {
        ...getSimpleTextProp("Score impacts sur l'économie"),
        structure: getStructureJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSurEconomie: {
        ...getSimpleTextProp("Niveau d'incertitude impacts sur l'économie"),
        structure: getStructureJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSurEconomie: {
        ...getSimpleTextProp("Commentaires sur impacts sur l'économie"),
        structure: getStructureJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreImpactsSanitaires: {
        ...getSimpleTextProp('Score impacts sanitaires'),
        structure: getStructureJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSanitaires: {
        ...getSimpleTextProp("Niveau d'incertitude impacts sanitaires"),
        structure: getStructureJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSanitaires: {
        ...getSimpleTextProp('Commentaires sur impacts sanitaires'),
        structure: getStructureJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAgriculture: {
        ...getSimpleTextProp('Score agriculture'),
        structure: getStructureJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAgriculture: {
        ...getSimpleTextProp("Niveau d'incertitude agriculture"),
        structure: getStructureJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAgriculture: {
        ...getSimpleTextProp('Commentaires sur agriculture'),
        structure: getStructureJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreForesterie: {
        ...getSimpleTextProp('Score foresterie'),
        structure: getStructureJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeForesterie: {
        ...getSimpleTextProp("Niveau d'incertitude foresterie"),
        structure: getStructureJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesForesterie: {
        ...getSimpleTextProp('Commentaires sur foresterie'),
        structure: getStructureJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAquaculture: {
        ...getSimpleTextProp('Score aquaculture'),
        structure: getStructureJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAquaculture: {
        ...getSimpleTextProp("Niveau d'incertitude aquaculture"),
        structure: getStructureJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAquaculture: {
        ...getSimpleTextProp('Commentaires sur aquaculture'),
        structure: getStructureJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreIndustrie: {
        ...getSimpleTextProp('Score industrie'),
        structure: getStructureJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeIndustrie: {
        ...getSimpleTextProp("Niveau d'incertitude industrie"),
        structure: getStructureJsonProp(Structures.industrie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesIndustrie: {
        ...getSimpleTextProp('Commentaires sur industrie'),
        structure: getStructureJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePatrimoine: {
        ...getSimpleTextProp('Score patrimoine'),
        structure: getStructureJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePatrimoine: {
        ...getSimpleTextProp("Niveau d'incertitude patrimoine"),
        structure: getStructureJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPatrimoine: {
        ...getSimpleTextProp('Commentaires sur patrimoine'),
        structure: getStructureJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSecurite: {
        ...getSimpleTextProp('Score sécurité'),
        structure: getStructureJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSecurite: {
        ...getSimpleTextProp("Niveau d'incertitude sécurité"),
        structure: getStructureJsonProp(Structures.securite),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSecurite: {
        ...getSimpleTextProp('Commentaires sur sécurité'),
        structure: getStructureJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreLoisirs: {
        ...getSimpleTextProp('Score loisirs'),
        structure: getStructureJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeLoisirs: {
        ...getSimpleTextProp("Niveau d'incertitude loisirs"),
        structure: getStructureJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesLoisirs: {
        ...getSimpleTextProp('Commentaires sur loisirs'),
        structure: getStructureJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAmenites: {
        ...getSimpleTextProp('Score aménities'),
        structure: getStructureJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAmenites: {
        ...getSimpleTextProp("Niveau d'incertitude aménities"),
        structure: getStructureJsonProp(Structures.amenites),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAmenites: {
        ...getSimpleTextProp('Commentaires sur aménities'),
        structure: getStructureJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Commentaires'),
    },

    impactsBienEtreHumainNoteGlobale: {
        ...getSimpleTextProp('Impacts bien-être humain note globale'),
        structure: getStructureJsonProp(Structures.impactSurBienEtreHumain),
        displayName: getDisplayNameProp('Note globale'),
    },

    // #endregion

    // #region ANALYSE DE RISQUES DES TAXONS EVALUES
    probabiliteIntroductionVolontaire: {
        ...getSimpleTextProp("Probabilité d'introduction volontaire"),
        structure: getStructureJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionVolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction volontaire"),
        structure: getStructureJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probabiliteIntroductionInvolontaire: {
        ...getSimpleTextProp("Probabilité d'introduction involontaire"),
        structure: getStructureJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionInvolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction involontaire"),
        structure: getStructureJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    limitrophe: {
        ...getSimpleTextProp('Limitrophe'),
        structure: getStructureJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Limitrophe'),
    },
    commentairesLimitrophe: {
        ...getSimpleTextProp('Commentaires sur la limitrophe'),
        structure: getStructureJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probaMax: {
        ...getSimpleTextProp('Probabilité maximale'),
        structure: getStructureJsonProp(Structures.analyseRisquesDesTaxonsEvalues),
        displayName: getDisplayNameProp('Proba Max'),
    },

    // #endregion

    // #region CRITERES INFORMATIFS
    scoreDistributionSpatiale: {
        ...getSimpleTextProp('Score distribution spatiale'),
        structure: getStructureJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesDistributionSpatiale: {
        ...getSimpleTextProp('Commentaires sur distribution spatiale'),
        structure: getStructureJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCoefficientDabondance: {
        ...getSimpleTextProp("Score coefficient d'abondance"),
        structure: getStructureJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesCoefficientDabondance: {
        ...getSimpleTextProp("Commentaires sur coefficient d'abondance"),
        structure: getStructureJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Commentaires'),
    },

    // #endregion
};

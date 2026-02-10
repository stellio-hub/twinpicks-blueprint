import { StellioTemplate } from 'src/interfaces';
import { getDisplayNameProp, getSimpleTextProp, getStructureJsonProp } from 'src/usecases/eaee/utils';
import * as Structures from 'src/usecases/eaee/speciesDataStructures';

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
        ...getSimpleTextProp("Taxon de l'espèce", 1),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Taxon'),
    },

    liste: {
        ...getSimpleTextProp('Liste', 2),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Liste'),
    },

    cdRef: {
        ...getSimpleTextProp('Code de référence', 3),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('CD Ref'),
    },

    nomValide: {
        ...getSimpleTextProp('Nom valide', 4),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Nom valide'),
    },

    nomVernaculaire: {
        ...getSimpleTextProp('Nom vernaculaire', 5),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Nom vernaculaire'),
    },

    rang: {
        ...getSimpleTextProp('Rang', 6),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Rang'),
    },

    hybride: {
        ...getSimpleTextProp('Hybride', 7),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Hybride'),
    },

    especeProtegee: {
        ...getSimpleTextProp('Est-ce une espèce protégée ?', 8),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Espèce protégée'),
    },

    filtreTaxonomique: {
        ...getSimpleTextProp('Filtre taxonomique', 9),
        structure: getStructureJsonProp(Structures.taxonomie),
        displayName: getDisplayNameProp('Filtre taxonomique'),
    },

    // #endregion

    // #region PRESENCE / ABSENCE
    source: {
        ...getSimpleTextProp('Source', 10),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Source'),
    },

    region: {
        ...getSimpleTextProp('Région', 11),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Région'),
    },

    '04': {
        ...getSimpleTextProp('04', 12),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('04'),
    },
    '05': {
        ...getSimpleTextProp('05', 13),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('05'),
    },
    '06': {
        ...getSimpleTextProp('06', 14),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('06'),
    },
    '13': {
        ...getSimpleTextProp('13', 15),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('13'),
    },
    '83': {
        ...getSimpleTextProp('83', 16),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('83'),
    },
    '84': {
        ...getSimpleTextProp('84', 17),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('84'),
    },

    filtreDePresence: {
        ...getSimpleTextProp('Filtre de présence', 18),
        structure: getStructureJsonProp(Structures.presenceAbsence),
        displayName: getDisplayNameProp('Filtre de présence'),
    },
    // #endregion

    // #region INDIGENAT
    statutPresenceREG: {
        ...getSimpleTextProp('Statut de présence REG', 19),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Statut présence REG'),
    },
    statutBiologique: {
        ...getSimpleTextProp('Statut biologique', 20),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Statut biologique'),
    },
    indigenat: {
        ...getSimpleTextProp('Indigénat', 21),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Indigénat'),
    },
    categorie: {
        ...getSimpleTextProp('Catégorie', 22),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Catégorie'),
    },
    sourceIndigenat: {
        ...getSimpleTextProp('Source indigénat', 23),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Source indigénat'),
    },
    periodeEtLieuDIntroduction: {
        ...getSimpleTextProp("Période et lieu d'introduction (France et régions)", 24),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Période et lieu d'introduction (France et régions)"),
    },
    sourcePeriodeEtLieuDIntroduction: {
        ...getSimpleTextProp("Source période et lieu d'introduction (France et régions)", 25),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Source période et lieu d'introduction (France et régions)"),
    },
    datePremiereEntreeSileneRegionSud: {
        ...getSimpleTextProp('Date de la première entrée Silène en région Sud', 26),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Date première entrée Silène région Sud'),
    },
    aireDorigine: {
        ...getSimpleTextProp("Aire d'origine", 27),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Aire d'origine"),
    },
    sourceAireDorigine: {
        ...getSimpleTextProp("Source aire d'origine", 28),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp("Source aire d'origine"),
    },
    remarques: {
        ...getSimpleTextProp("Remarques sur l'indigénat", 29),
        structure: getStructureJsonProp(Structures.indigenat),
        displayName: getDisplayNameProp('Remarques'),
    },

    // #endregion

    // #region AUTONOMIE
    spontaneite: {
        ...getSimpleTextProp('Spontanéité', 30),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Spontanéité'),
    },
    sourceSpontaneite: {
        ...getSimpleTextProp('Source spontanéité', 31),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source spontanéité'),
    },
    autonomie: {
        ...getSimpleTextProp('Autonomie', 32),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Autonomie'),
    },
    sourceAutonomie: {
        ...getSimpleTextProp('Source autonomie', 33),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Source autonomie'),
    },
    remarquesAutonomie: {
        ...getSimpleTextProp("Remarques sur l'autonomie", 34),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp('Remarques'),
    },
    filtreDAutonomie: {
        ...getSimpleTextProp("Filtre d'autonomie", 35),
        structure: getStructureJsonProp(Structures.autonomie),
        displayName: getDisplayNameProp("Filtre d'autonomie"),
    },

    // #endregion

    // #region INFORMATION SUPPLEMENTAIRES
    habitat: {
        ...getSimpleTextProp('Habitat', 36),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Habitat'),
    },
    statutBiogéographiqueEnFrance: {
        ...getSimpleTextProp('Statut biogéographique en France', 37),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Statut biogéographique en France'),
    },
    interditDintroduction: {
        ...getSimpleTextProp("Interdit d'introduction", 38),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Interdit d'introduction"),
    },
    arreteMinisterielle: {
        ...getSimpleTextProp('Arrêté ministériel', 39),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Arrêté ministériel'),
    },
    listeOccitanie: {
        ...getSimpleTextProp("Liste d'Occitanie", 40),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Liste Occitanie'),
    },
    lienCentreDeRessource: {
        ...getSimpleTextProp('Lien vers centre de ressource', 41),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Lien centre de ressource'),
    },
    lienINPN: {
        ...getSimpleTextProp('Lien vers INPN', 42),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp('Lien INPN'),
    },
    complementsInfo: {
        ...getSimpleTextProp("Compléments d'information", 43),
        structure: getStructureJsonProp(Structures.informationsSupplementaires),
        displayName: getDisplayNameProp("Compléments d'information"),
    },

    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS ENVIRONNEMENTAUX
    scorePotentielDeProliferation: {
        ...getSimpleTextProp('Score du potentiel de prolifération', 44),
        structure: getStructureJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePotentielDeProliferation: {
        ...getSimpleTextProp("Niveau d'incertitude du potentiel de prolifération", 45),
        structure: getStructureJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPotentielDeProliferation: {
        ...getSimpleTextProp('Commentaires sur le potentiel de prolifération', 46),
        structure: getStructureJsonProp(Structures.potentielDeProliferation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreColonisationHabitatsNaturels: {
        ...getSimpleTextProp('Score de colonisation des habitats naturels', 47),
        structure: getStructureJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeColonisationHabitatsNaturels: {
        ...getSimpleTextProp("Niveau d'incertitude de colonisation des habitats naturels", 48),
        structure: getStructureJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesColonisationHabitatsNaturels: {
        ...getSimpleTextProp('Commentaires sur la colonisation des habitats naturels', 49),
        structure: getStructureJsonProp(Structures.colonisationHabitatsNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePredation: {
        ...getSimpleTextProp('Score de prédation', 50),
        structure: getStructureJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePredation: {
        ...getSimpleTextProp("Niveau d'incertitude de prédation", 51),
        structure: getStructureJsonProp(Structures.predation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPredation: {
        ...getSimpleTextProp('Commentaires sur la prédation', 52),
        structure: getStructureJsonProp(Structures.predation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCompetition: {
        ...getSimpleTextProp('Score de compétition', 53),
        structure: getStructureJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCompetition: {
        ...getSimpleTextProp("Niveau d'incertitude de compétition", 54),
        structure: getStructureJsonProp(Structures.competition),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCompetition: {
        ...getSimpleTextProp('Commentaires sur la compétition', 55),
        structure: getStructureJsonProp(Structures.competition),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreMaladies: {
        ...getSimpleTextProp('Score de maladies', 56),
        structure: getStructureJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeMaladies: {
        ...getSimpleTextProp("Niveau d'incertitude de maladies", 57),
        structure: getStructureJsonProp(Structures.maladies),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesMaladies: {
        ...getSimpleTextProp('Commentaires sur les maladies', 58),
        structure: getStructureJsonProp(Structures.maladies),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreHybridation: {
        ...getSimpleTextProp("Score d'hybridation", 59),
        structure: getStructureJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeHybridation: {
        ...getSimpleTextProp("Niveau d'incertitude de hybridation", 60),
        structure: getStructureJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesHybridation: {
        ...getSimpleTextProp("Commentaires sur l'hybridation", 61),
        structure: getStructureJsonProp(Structures.hybridation),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCyclesNaturels: {
        ...getSimpleTextProp('Score de cycles naturels', 62),
        structure: getStructureJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeCyclesNaturels: {
        ...getSimpleTextProp("Niveau d'incertitude de cycles naturels", 63),
        structure: getStructureJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesCyclesNaturels: {
        ...getSimpleTextProp('Commentaires sur les cycles naturels', 64),
        structure: getStructureJsonProp(Structures.cyclesNaturels),
        displayName: getDisplayNameProp('Commentaires'),
    },
    // #endregion

    // #region ANALYSE DE L'INTENSITE DES IMPACTS SOCIO-ECONOMIQUES SANITAIRES
    scoreImpactsSurEconomie: {
        ...getSimpleTextProp("Score impacts sur l'économie", 65),
        structure: getStructureJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSurEconomie: {
        ...getSimpleTextProp("Niveau d'incertitude impacts sur l'économie", 66),
        structure: getStructureJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSurEconomie: {
        ...getSimpleTextProp("Commentaires sur impacts sur l'économie", 67),
        structure: getStructureJsonProp(Structures.impactsSurEconomie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreImpactsSanitaires: {
        ...getSimpleTextProp('Score impacts sanitaires', 68),
        structure: getStructureJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeImpactsSanitaires: {
        ...getSimpleTextProp("Niveau d'incertitude impacts sanitaires", 69),
        structure: getStructureJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesImpactsSanitaires: {
        ...getSimpleTextProp('Commentaires sur impacts sanitaires', 70),
        structure: getStructureJsonProp(Structures.impactsSanitaires),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAgriculture: {
        ...getSimpleTextProp('Score agriculture', 71),
        structure: getStructureJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAgriculture: {
        ...getSimpleTextProp("Niveau d'incertitude agriculture", 72),
        structure: getStructureJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAgriculture: {
        ...getSimpleTextProp('Commentaires sur agriculture', 73),
        structure: getStructureJsonProp(Structures.agriculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreForesterie: {
        ...getSimpleTextProp('Score foresterie', 74),
        structure: getStructureJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeForesterie: {
        ...getSimpleTextProp("Niveau d'incertitude foresterie", 75),
        structure: getStructureJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesForesterie: {
        ...getSimpleTextProp('Commentaires sur foresterie', 76),
        structure: getStructureJsonProp(Structures.foresterie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAquaculture: {
        ...getSimpleTextProp('Score aquaculture', 77),
        structure: getStructureJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAquaculture: {
        ...getSimpleTextProp("Niveau d'incertitude aquaculture", 78),
        structure: getStructureJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAquaculture: {
        ...getSimpleTextProp('Commentaires sur aquaculture', 79),
        structure: getStructureJsonProp(Structures.aquaculture),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreIndustrie: {
        ...getSimpleTextProp('Score industrie', 80),
        structure: getStructureJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeIndustrie: {
        ...getSimpleTextProp("Niveau d'incertitude industrie", 81),
        structure: getStructureJsonProp(Structures.industrie),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesIndustrie: {
        ...getSimpleTextProp('Commentaires sur industrie', 82),
        structure: getStructureJsonProp(Structures.industrie),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scorePatrimoine: {
        ...getSimpleTextProp('Score patrimoine', 83),
        structure: getStructureJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudePatrimoine: {
        ...getSimpleTextProp("Niveau d'incertitude patrimoine", 84),
        structure: getStructureJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesPatrimoine: {
        ...getSimpleTextProp('Commentaires sur patrimoine', 85),
        structure: getStructureJsonProp(Structures.patrimoine),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreSecurite: {
        ...getSimpleTextProp('Score sécurité', 86),
        structure: getStructureJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeSecurite: {
        ...getSimpleTextProp("Niveau d'incertitude sécurité", 87),
        structure: getStructureJsonProp(Structures.securite),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesSecurite: {
        ...getSimpleTextProp('Commentaires sur sécurité', 88),
        structure: getStructureJsonProp(Structures.securite),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreLoisirs: {
        ...getSimpleTextProp('Score loisirs', 89),
        structure: getStructureJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeLoisirs: {
        ...getSimpleTextProp("Niveau d'incertitude loisirs", 90),
        structure: getStructureJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesLoisirs: {
        ...getSimpleTextProp('Commentaires sur loisirs', 91),
        structure: getStructureJsonProp(Structures.loisirs),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreAmenites: {
        ...getSimpleTextProp('Score aménities', 92),
        structure: getStructureJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Score'),
    },
    niveauIncertitudeAmenites: {
        ...getSimpleTextProp("Niveau d'incertitude aménities", 93),
        structure: getStructureJsonProp(Structures.amenites),
        displayName: getDisplayNameProp("Niveau d'incertitude"),
    },
    commentairesAmenites: {
        ...getSimpleTextProp('Commentaires sur aménities', 94),
        structure: getStructureJsonProp(Structures.amenites),
        displayName: getDisplayNameProp('Commentaires'),
    },

    impactsBienEtreHumainNoteGlobale: {
        ...getSimpleTextProp('Impacts bien-être humain note globale', 95),
        structure: getStructureJsonProp(Structures.impactSurBienEtreHumain),
        displayName: getDisplayNameProp('Note globale'),
    },

    // #endregion

    // #region ANALYSE DE RISQUES DES TAXONS EVALUES
    probabiliteIntroductionVolontaire: {
        ...getSimpleTextProp("Probabilité d'introduction volontaire", 96),
        structure: getStructureJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionVolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction volontaire", 97),
        structure: getStructureJsonProp(Structures.introductionVolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probabiliteIntroductionInvolontaire: {
        ...getSimpleTextProp("Probabilité d'introduction involontaire", 98),
        structure: getStructureJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Probabilité'),
    },
    commentairesIntroductionInvolontaire: {
        ...getSimpleTextProp("Commentaires sur l'introduction involontaire", 99),
        structure: getStructureJsonProp(Structures.introductionInvolontaire),
        displayName: getDisplayNameProp('Commentaires'),
    },

    limitrophe: {
        ...getSimpleTextProp('Limitrophe', 100),
        structure: getStructureJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Limitrophe'),
    },
    commentairesLimitrophe: {
        ...getSimpleTextProp('Commentaires sur la limitrophe', 101),
        structure: getStructureJsonProp(Structures.limitrophe),
        displayName: getDisplayNameProp('Commentaires'),
    },

    probaMax: {
        ...getSimpleTextProp('Probabilité maximale', 102),
        structure: getStructureJsonProp(Structures.analyseIntensiteImpactsEnvironnementaux),
        displayName: getDisplayNameProp('Proba Max'),
    },

    // #endregion

    // #region CRITERES INFORMATIFS
    scoreDistributionSpatiale: {
        ...getSimpleTextProp('Score distribution spatiale', 103),
        structure: getStructureJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesDistributionSpatiale: {
        ...getSimpleTextProp('Commentaires sur distribution spatiale', 104),
        structure: getStructureJsonProp(Structures.distributionSpatiale),
        displayName: getDisplayNameProp('Commentaires'),
    },

    scoreCoefficientDabondance: {
        ...getSimpleTextProp("Score coefficient d'abondance", 105),
        structure: getStructureJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Score'),
    },
    commentairesCoefficientDabondance: {
        ...getSimpleTextProp("Commentaires sur coefficient d'abondance", 106),
        structure: getStructureJsonProp(Structures.coefficientDabondance),
        displayName: getDisplayNameProp('Commentaires'),
    },

    // #endregion
};

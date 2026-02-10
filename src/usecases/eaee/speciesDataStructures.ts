const taxonomie = {
    '0': 'taxonomie',
} as const;

const presenceAbsence = {
    '0': 'presenceAbsence',
} as const;

const indigenat = {
    '0': 'autonomie',
} as const;

const autonomie = {
    '0': 'autonomie',
} as const;

const informationsSupplementaires = {
    '0': 'informationsSupplementaires',
} as const;

// #region ANALYSE INTENSITE IMPACTS ENVIRONNEMENTAUX
const analyseIntensiteImpactsEnvironnementaux = {
    '0': 'analyseIntensiteImpactsEnvironnementaux',
} as const;

const potentielDeProliferation = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'potentielDeProliferation',
} as const;
const colonisationHabitatsNaturels = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'colonisationHabitatsNaturels',
} as const;
const impactsSurTaxonsIndigenes = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'impactsSurTaxonsIndigenes',
} as const;
const predation = {
    ...impactsSurTaxonsIndigenes,
    '2': 'predation',
} as const;
const competition = {
    ...impactsSurTaxonsIndigenes,
    '2': 'competition',
} as const;
const maladies = {
    ...impactsSurTaxonsIndigenes,
    '2': 'maladies',
} as const;
const hybridation = {
    ...impactsSurTaxonsIndigenes,
    '2': 'hybridation',
} as const;

const impactsSurEnvironnement = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'impactsSurEnvironnement',
} as const;
const cyclesNaturels = {
    ...impactsSurEnvironnement,
    '2': 'cyclesNaturels',
} as const;
const alterationsPhysiques = {
    ...impactsSurEnvironnement,
    '2': 'alterationsPhysiques',
} as const;
const successionEcologiques = {
    ...impactsSurEnvironnement,
    '2': 'successionEcologiques',
} as const;
const reseauxTrophiques = {
    ...impactsSurEnvironnement,
    '2': 'reseauxTrophiques',
} as const;

// #endregion

// #region ANALYSE DE L'INTENSITE DES IMPACTS SOCIO-ECONOMIQUES SANITAIRES
const analyseIntensiteImpactsSocioEconomiquesSanitaires = {
    '0': 'analyseIntensiteImpactsSocioEconomiquesSanitaires',
} as const;

const impactsSurEconomie = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactsSurEconomie',
} as const;
const impactsSanitaires = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactsSanitaires',
} as const;

const impactsSurActivitesHumaines = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactsSurActivitesHumaines',
} as const;
const agriculture = {
    ...impactsSurActivitesHumaines,
    '2': 'agriculture',
} as const;
const foresterie = {
    ...impactsSurActivitesHumaines,
    '2': 'foresterie',
} as const;
const aquaculture = {
    ...impactsSurActivitesHumaines,
    '2': 'aquaculture',
} as const;
const industrie = {
    ...impactsSurActivitesHumaines,
    '2': 'industrie',
} as const;

const impactSurBienEtreHumain = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactSurBienEtreHumain',
} as const;
const patrimoine = {
    ...impactSurBienEtreHumain,
    '2': 'patrimoine',
} as const;
const securite = {
    ...impactSurBienEtreHumain,
    '2': 'securite',
} as const;
const loisirs = {
    ...impactSurBienEtreHumain,
    '2': 'loisirs',
} as const;
const amenites = {
    ...impactSurBienEtreHumain,
    '2': 'amenites',
} as const;

// #endregion

// #region ANALYSE DE RISQUES DES TAXONS EVALUES
const analyseRisquesDesTaxonsEvalues = {
    '0': 'analyseRisquesDesTaxonsEvalues',
} as const;
const introductionVolontaire = {
    ...analyseRisquesDesTaxonsEvalues,
    '1': 'introductionVolontaire',
} as const;
const introductionInvolontaire = {
    ...analyseRisquesDesTaxonsEvalues,
    '1': 'introductionInvolontaire',
} as const;
const limitrophe = {
    ...analyseRisquesDesTaxonsEvalues,
    '1': 'limitrophe',
} as const;

// #endregion

// #region CRITERES INFORMATIFS
const criteresInformatifs = {
    '0': 'criteresInformatifs',
} as const;
const distributionSpatiale = {
    ...criteresInformatifs,
    '1': 'distributionSpatiale',
} as const;
const coefficientDabondance = {
    ...criteresInformatifs,
    '1': 'coefficientDabondance',
} as const;

// #endregion

export {
    taxonomie,
    presenceAbsence,
    indigenat,
    autonomie,
    informationsSupplementaires,
    analyseIntensiteImpactsEnvironnementaux,
    impactsSurTaxonsIndigenes,
    potentielDeProliferation,
    colonisationHabitatsNaturels,
    predation,
    competition,
    maladies,
    hybridation,
    impactsSurEnvironnement,
    cyclesNaturels,
    alterationsPhysiques,
    successionEcologiques,
    reseauxTrophiques,
    analyseIntensiteImpactsSocioEconomiquesSanitaires,
    impactsSurEconomie,
    impactsSanitaires,
    impactsSurActivitesHumaines,
    agriculture,
    foresterie,
    aquaculture,
    industrie,
    impactSurBienEtreHumain,
    patrimoine,
    securite,
    loisirs,
    amenites,
    analyseRisquesDesTaxonsEvalues,
    introductionVolontaire,
    introductionInvolontaire,
    limitrophe,
    criteresInformatifs,
    distributionSpatiale,
    coefficientDabondance,
};

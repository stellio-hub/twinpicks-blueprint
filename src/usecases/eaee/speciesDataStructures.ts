export const ficheEspece = {
    '0': 'ficheEspece',
} as const;

export const taxonomie = {
    '0': 'taxonomie',
} as const;

export const presenceAbsence = {
    '0': 'presenceAbsence',
} as const;

export const indigenat = {
    '0': 'indigenat',
} as const;

export const autonomie = {
    '0': 'autonomie',
} as const;

export const informationsSupplementaires = {
    '0': 'informationsSupplementaires',
} as const;

// #region ANALYSE INTENSITE IMPACTS ENVIRONNEMENTAUX
export const analyseIntensiteImpactsEnvironnementaux = {
    '0': 'analyseIntensiteImpactsEnvironnementaux',
} as const;

export const potentielDeProliferation = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'potentielDeProliferation',
} as const;
export const colonisationHabitatsNaturels = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'colonisationHabitatsNaturels',
} as const;
export const impactsSurTaxonsIndigenes = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'impactsSurTaxonsIndigenes',
} as const;
export const predation = {
    ...impactsSurTaxonsIndigenes,
    '2': 'predation',
} as const;
export const competition = {
    ...impactsSurTaxonsIndigenes,
    '2': 'competition',
} as const;
export const maladies = {
    ...impactsSurTaxonsIndigenes,
    '2': 'maladies',
} as const;
export const hybridation = {
    ...impactsSurTaxonsIndigenes,
    '2': 'hybridation',
} as const;

export const impactsSurEnvironnement = {
    ...analyseIntensiteImpactsEnvironnementaux,
    '1': 'impactsSurEnvironnement',
} as const;
export const cyclesNaturels = {
    ...impactsSurEnvironnement,
    '2': 'cyclesNaturels',
} as const;
export const alterationsPhysiques = {
    ...impactsSurEnvironnement,
    '2': 'alterationsPhysiques',
} as const;
export const successionEcologiques = {
    ...impactsSurEnvironnement,
    '2': 'successionEcologiques',
} as const;
export const reseauxTrophiques = {
    ...impactsSurEnvironnement,
    '2': 'reseauxTrophiques',
} as const;

// #endregion

// #region ANALYSE DE L'INTENSITE DES IMPACTS SOCIO-ECONOMIQUES SANITAIRES
export const analyseIntensiteImpactsSocioEconomiquesSanitaires = {
    '0': 'analyseIntensiteImpactsSocioEconomiquesSanitaires',
} as const;

export const impactsSurEconomie = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactsSurEconomie',
} as const;
export const impactsSanitaires = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactsSanitaires',
} as const;

export const impactsSurActivitesHumaines = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactsSurActivitesHumaines',
} as const;
export const agriculture = {
    ...impactsSurActivitesHumaines,
    '2': 'agriculture',
} as const;
export const foresterie = {
    ...impactsSurActivitesHumaines,
    '2': 'foresterie',
} as const;
export const aquaculture = {
    ...impactsSurActivitesHumaines,
    '2': 'aquaculture',
} as const;
export const industrie = {
    ...impactsSurActivitesHumaines,
    '2': 'industrie',
} as const;

export const impactSurBienEtreHumain = {
    ...analyseIntensiteImpactsSocioEconomiquesSanitaires,
    '1': 'impactSurBienEtreHumain',
} as const;
export const patrimoine = {
    ...impactSurBienEtreHumain,
    '2': 'patrimoine',
} as const;
export const securite = {
    ...impactSurBienEtreHumain,
    '2': 'securite',
} as const;
export const loisirs = {
    ...impactSurBienEtreHumain,
    '2': 'loisirs',
} as const;
export const amenites = {
    ...impactSurBienEtreHumain,
    '2': 'amenites',
} as const;

// #endregion

// #region ANALYSE DE RISQUES DES TAXONS EVALUES
export const analyseRisquesDesTaxonsEvalues = {
    '0': 'analyseRisquesDesTaxonsEvalues',
} as const;
export const introductionVolontaire = {
    ...analyseRisquesDesTaxonsEvalues,
    '1': 'introductionVolontaire',
} as const;
export const introductionInvolontaire = {
    ...analyseRisquesDesTaxonsEvalues,
    '1': 'introductionInvolontaire',
} as const;
export const limitrophe = {
    ...analyseRisquesDesTaxonsEvalues,
    '1': 'limitrophe',
} as const;

// #endregion

// #region CRITERES INFORMATIFS
export const criteresInformatifs = {
    '0': 'criteresInformatifs',
} as const;
export const distributionSpatiale = {
    ...criteresInformatifs,
    '1': 'distributionSpatiale',
} as const;
export const coefficientDabondance = {
    ...criteresInformatifs,
    '1': 'coefficientDabondance',
} as const;

// #endregion

export const analyseFinale = {
    '0': 'Analyse finale',
} as const;

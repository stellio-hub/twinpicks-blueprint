export const generalites = {
    '0': 'generalites',
} as const;

export const porteursDeProjets = {
    '0': 'porteursDeProjets',
} as const;

export const especesCibles = {
    '0': 'especesCibles',
} as const;

export const resultatsAttendus = {
    '0': 'resultatsAttendus',
} as const;

export const lieuDeLaction = {
    '0': 'lieuDeLaction',
} as const;

export const typeDaction = {
    '0': 'typeDaction',
} as const;

export const resultatEtBilan = {
    '0': 'resultatEtBilan',
} as const;

export const ficheRex = {
    '0': 'ficheRex',
} as const;

// #region PORTEURS DE PROJET
export const structurePilote = {
    ...porteursDeProjets,
    '1': 'structurePilote',
} as const;

export const personneReferente = {
    ...porteursDeProjets,
    '1': 'personneReferente',
} as const;
// #endregion

// #region TYPE DE L'ACTION
export const gestion = {
    ...typeDaction,
    '1': 'gestionDeLaction',
};

export const objectifs = {
    ...typeDaction,
    ...gestion,
    '2': 'objectifs',
};

export const operations = {
    ...typeDaction,
    ...gestion,
    '2': 'operations',
};

export const suiviDesOperation = {
    ...typeDaction,
    ...gestion,
    '2': 'suiviDesOperation',
};

export const devenirDesEspeces = {
    ...typeDaction,
    ...gestion,
    '2': 'devenirDesEspeces',
};

export const communication = {
    ...typeDaction,
    '1': 'communication',
};
// #endregion

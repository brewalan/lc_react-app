import React from 'react';

/* icon to be used in the app */
export const iconList = {
    iconTrash: <i class="fa-duotone fa-trash fa-2x"></i>,
    iconFeminin: <i class="fa-solid fa-person-dress fa-2x"></i>,
    iconMasculin: <i class="fa-solid fa-person fa-2x"></i>,
    icoPronominal: <i class="fa-duotone fa-arrows-rotate fa-2x"></i>,
    icoPronominalEn: <i class="fa-duotone fa-rotate-exclamation fa-2x"></i>,
    icoQuestion: <i class="fa-duotone fa-seal-question fa-2x"></i>,
    icoNegation: <i class="fa-duotone fa-ban fa-2x"></i>,
    iconPrint: <i class="fa-regular fa-print fa-2x"></i>,
    iconWord: <i class="fa-duotone fa-file-word fa-2x"></i>,
    iconIOS: <i class="fa-brands fa-apple fa-2x"></i>,
    iconAndroid: <i class="fa-brands fa-android fa-2x"></i>,
    iconWindows: <i class="fa-brands fa-windows fa-2x"></i>,
    iconMac: <i class="fa-solid fa-computer-classic fa-2x"></i>
};

/* détail des modes */
export const conjMode = {
    indicatif: "Indicatif",
    subjonctif: "Subjonctif",
    conditionnel: "Conditionnel",
    imperatif: "Impératif",
    participe: "Participe",
    infinitif: "Infinitif",
    regle: "Note sur le verbe"
};

/* texte des temps */
export const conjTemps = {
    IND_P: "Présent",
    IND_PC: "Passé composé",
    IND_I: "Imparfait",
    IND_PQP: "Plus-que-parfait",
    IND_PS: "Pasé simple",
    IND_PA: "Passé antérieur",
    IND_FS: "Futur simple",
    IND_FA: "Futur antérieur",
    SUBJ_P: "Présent",
    SUBJ_PC: "Passé",
    SUBJ_I: "Imparfait",
    SUBJ_PQP: "Plus-que-parfait",
    COND_P: "Présent",
    COND_PC: "Passé première forme",
    COND_P2: "Passé deuxième forme",
    IMP_P: "Présent",
    IMP_PC: "Passé",
    INF_P: "Présent",
    INF_PP: "Passé",
    GER_P: "Présent",
    GER_PP: "Passé",
    PART_PR: "Présent",
    PART_ALL: "Passé",
    AUCUN: ""
};


/* texts to be used */
export const conjText = {
    aideText: "<h3>Bienvenue dans Le Conjuguer React</h3><p>Cette page vous permet de voir les tableaux de conjugaison de tous les verbes.<br>Pour l'utiliser, entrez un verbe dans la zone ci-dessus.<br>Puis, cliquez sur le bouton Conjuguer pour voir le tableau de conjugaison.</p>",
    conjugaisonVerbe: "Conjugaison du verbe ",
    historique: "Historique",
    nuageDeVerbe: "Nuage de verbes",
    btnConjuguer: "Conjuguer",
    vbPropose1: "Le verbe ",
    vbPropose2: " n'a pas été trouvé.",
    vbPropose3: "Voici une proposition de verbes :",
    vbAConjuguer: "Verbe à conjuguer",
    toolTipTrashHistory: "Effacer l'historique de conjugaison"
}

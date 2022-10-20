import React from 'react';

/* icon to be used in the app */
export const iconList = {
    iconTrash: <i className="fa-duotone fa-trash fa-2x"></i>,
    iconFeminin: <i className="fa-solid fa-venus fa-2x"></i>,
    iconMasculin: <i className="fa-solid fa-mars fa-2x"></i>,
    icoPronominal: <i className="fa-duotone fa-arrows-rotate fa-2x"></i>,
    icoPronominalActive: <i className="fa-duotone fa-arrows-rotate fa-2x fa-rotate-by btn-rotate"></i>,
    icoPronominalEn: <i className="fa-duotone fa-rotate-exclamation fa-2x"></i>,
    icoPronominalEnActive: <i className="fa-duotone fa-rotate-exclamation fa-2x fa-rotate-by btn-rotate"></i>,
    icoPassif: <i className="fa-duotone fa-snooze fa-2x"></i>,
    icoPassifActive: <i className="fa-duotone fa-snooze fa-2x fa-rotate-by btn-rotate"></i>,
    icoQuestion: <i className="fa-duotone fa-seal-question fa-2x"></i>,
    icoQuestionActive: <i className="fa-duotone fa-seal-question fa-2x fa-rotate-by btn-rotate"></i>,
    icoNegation: <i className="fa-duotone fa-ban fa-2x"></i>,
    icoNegationActive: <i className="fa-duotone fa-ban fa-2x fa-rotate-by btn-rotate"></i>,
    iconPrint: <i className="fa-regular fa-print fa-2x"></i>,
    iconWord: <i className="fa-regular fa-file-word fa-2x"></i>,
    iconIOS: <i className="fa-brands fa-apple fa-2x"></i>,
    iconAndroid: <i className="fa-brands fa-android fa-2x"></i>,
    iconWindows: <i className="fa-brands fa-windows fa-2x"></i>,
    iconMac: <i className="fa-solid fa-computer-classic fa-2x"></i>,
    iconGroupe3: <i className='fa-light fa-2x fa-square-3'></i> 
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
    aideText: "<h3>Bienvenue dans Le Conjugueur React</h3><p>Cette page vous permet de voir les tableaux de conjugaison de tous les verbes.<br>Cette page utilise la technologie React qui permet de ne mettre à jour que la zone qui a été modifiée. Ceci permet d'avoir une plus grande fluidité dans la mise à joru de la page.<br>Pour visualiser un verbe, entrez un verbe dans la zone ci-dessus.<br>Puis, cliquez sur le bouton Conjuguer pour voir le tableau de conjugaison.</p>",
    conjugaisonVerbe: "Conjugaison du verbe ",
    historique: "Historique",
    nuageDeVerbe: "Nuage de verbes",
    btnConjuguer: "Conjuguer",
    vbPropose1: "Le verbe ",
    vbPropose2: " n'a pas été trouvé.",
    vbPropose3: "Voici une proposition de verbes :",
    vbAConjuguer: "Verbe à conjuguer",
    toolTipTrashHistory: "Effacer l'historique de conjugaison",
    toolTipMasculin: "Verbe au masculin",
    toolTipFeminin: "Verbe au féminin",
    toolTipQuestion: "Forme interrogative",
    toolTipNegation: "Forme négative",
    toolTipPronominal: "Forme pronominale",
    toolTipPronominalEn: "Forme avec s'en",
    toolTipPassif: "Voix passive",
    toolTipPrint: "Imprimer le verbe",
    toolTipRtf: "EXporter en RTF vers Word"
}


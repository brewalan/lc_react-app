 //temps simple
  /** Temps simple : Indicatif présent */
  export const IND_P    = 0;    
  /** Temps simple : Indicatif imparfait */
  export const IND_I    = 6;    
  /** Temps simple : Indicatif passé simple */
  export const IND_PS   = 12;   
  /** Temps simple : Indicatif futur simple */
  export const IND_FS   = 18;   
  /** Temps simple : Subjonctif présent */
  export const SUBJ_P   = 24;   
  /** Temps simple : Subjonctif imparfait */
  export const SUBJ_I   = 30;   
  /** Temps simple : Conditionnel présent */
  export const COND_P   = 36;   
  /** Temps simple : Impératif présent */
  export const IMP_P    = 42;   
  /** Participé passé masculin singulier */
  export const PART_P   = 45;   
  /** Participé présent */
  export const PART_PR  = 46;   

  //temps composé
  /** Temps composé : Indicatif passé composé */
  export const IND_PC   = 100;  
  /** Temps composé : Indicatif plus-que-parfait */
  export const IND_PQP  = 106;  
  /** Temps composé : Indicatif passé antérieur */
  export const IND_PA   = 112;  
  /** Temps composé : Indicatif futur antérieur */
  export const IND_FA   = 118;
  /** Temps composé : Subjonctif passé */
  export const SUBJ_PC  = 124;
  /** Temps composé : Subjonctif plus-que-parfait */
  export const SUBJ_PQP = 130;
  /** Temps composé : Conditionnel passé première forme */
  export const COND_PC  = 136;
  /** Temps composé : Conditionnel passé deuxième forme */
  export const COND_P2  = 137;
  /** Temps composé : Impératif pasé */
  export const IMP_PC   = 142;

  //temps impersonnels
  /** Participé passé féminin singulier */
  export const PART_PF  = 247;
  /** Participé passé masculin pluriel */
  export const PART_PP  = 248;
  /** Participé passé féminin pluriel */
  export const PART_PFP = 249;
  /** Participé passé gérondif */
  export const PART_GER = 250;
  /** Gérondif présent */
  export const GER_P    = 251;
  /** Gérondif passé */
  export const GER_PP   = 221;
  /** Infinitif présent */
  export const INF_P    = 253;
  /** Infinitif passé */
  export const INF_PP   = 254;
  /** Tous les participes quelque soit le genre et le nombre */
  export const PART_ALL = 255;
  /** Aucun temps en particulier. Ceci est utile lorsqu'il y a un affichange dans un tableau et qu'on ne souhaite pas afficher de temps. Le Conjugueur renvoie un blanc. */
  export const AUCUN    = 256;

  //temps proches
  /** Tournure de phrase du futur proche */
  export const FUTUR_PROCHE = 300; 
  /** Tournure de phrase du passé proche */
  export const PASSE_PROCHE = 306; 

  //pronoms
  /** Première personne du singulier */
  export const JE       = 0;
  /** Deuxième personne du singulier */
  export const TU       = 1;
  /** Troisième personne du singulier */
  export const IL       = 2;
  /** Première personne du pluriel */
  export const NOUS     = 3;
  /** Deuxième personne du pluriel */
  export const VOUS     = 4;
  /** Troisième personne du pluriel */
  export const ILS      = 5;

  //message
  /** Cette constante est utilisée lorsque le verbe n'existe pas dans la liste de verbe. Dans ce cas, on peut forcer la conjugaison mais on signale à l'utilisateur que le verbe n'existe pas. */
  export const VERBE_NOT_EXIST  = 0;
  /** Cette constante est utilisée lorsque le modèle de verbe n'a pas été trouvée. La conjugaison n'est pas possible dans ce cas. */
  export const MODELE_NOT_EXIST = 1;
  
  //niveau de détail des champs
  /** Les noms des temps ou des différents éléments peuvent être plus ou moins long selon le type d'affichage. Ici, nous avons le long le plus long disponible : mode + temps. */
  export const DETAIL_LONG      = 0;
  /** Les noms des temps ou des différents éléments peuvent être plus ou moins long selon le type d'affichage. Ici, nous avons le nom du temps uniquement. */
  export const DETAIL_TEMPS     = 1;
  /** Les noms des temps ou des différents éléments peuvent être plus ou moins long selon le type d'affichage. Ici, nous avons le nom du mode uniquement. */
  export const DETAIL_MODE      = 2;
  
  //affichage du mode
  /** Correspond au mode de l'indicatif */
  export const MODE_INDICATIF   = 0;
  /** Correspond au mode du subjonctif */
  export const MODE_SUBJONCTIF  = 1;
  /** Correspond au mode du conditionnel */
  export const MODE_CONDITIONNEL= 2;
  /** Correspond au mode de l'impératif */
  export const MODE_IMPERATIF   = 3;
  /** Correspond au mode impersonnel */
  export const MODE_IMPERSONNEL = 4;
  /** Correspond au mode de l'infinitif */
  export const MODE_INFINITIF   = 5;
  /** Correspond au mode du gérondif */
  export const MODE_GERONDIF    = 6;
  /** Correspond au mode du participe */
  export const MODE_PARTICIPE   = 7;
  /** Ceci n'est pas vraiment un mode mais regroupe les différentes tournures de phrase */
  export const MODE_PROCHE      = 8;
  /** Ceci n'est pas vraiment un mode mais regroupe les synonymes */
  export const MODE_SYNONYME    = 9;  

  //regarde l'auxiliaire
  /** Signale qu'un verbe est conjugué avec l'auxiliaire avoir */
  export const AUXI_AVOIR       = 0;
  /** Signale qu'un verbe est conjugué avec l'auxiliaire être */
  export const AUXI_ETRE        = 1;
  /** Signale qu'un verbe est conjugué avec l'auxiliaire avoir ou être */
  export const AUXI_AVOIR_ETRE  = 2;

  /** langue par défaut */
  let lang="fr"

/** Cette fonction permet de renvoyer un texte dans la langue choisit en paramètre.
* @param string fr Texte en français
* @param string uk Texte en anglais
* @return string */
function getLang(fr,uk) {
if (lang==="fr") return fr; else return uk;
}

/** Cette fonction retourne le nom d'un temps en fonction du niveau de détail :
* - DETAIL_LONG : on obtient ici le mode + le nom du temps (ex: Indicatif présent)
* - DETAIL_TEMPS : on obtient ici uniquement le nom du temps (ex: Présent)
* - DETAIL_MODE : on obtient ici uniquement le nom du mode (ex: Indicatif)
* @param string temps Constante du temps
* @param string detail Niveau de détail
* @return string */
export function getTemps(temps,detail) {
    switch(detail) {
        case DETAIL_LONG:
            if (temps===IND_P) return getLang("Indicatif présent","Indicative present");
            if (temps===IND_PC) return getLang("Indicatif passé composé","Indicative present perfect");
            if (temps===IND_I) return getLang("Indicatif imparfait","Indicative imperfect");
            if (temps===IND_PQP) return getLang("Indicatif plus-que-parfait","Indicative pluperfect");
            if (temps===IND_PS) return getLang("Indicatif passé simple","Indicative simple past");
            if (temps===IND_PA) return getLang("Indicatif passé antérieur","Indicative past perfect");
            if (temps===IND_FS) return getLang("Indicatif futur simple","Indicative future");
            if (temps===IND_FA) return getLang("Indicatif futur antérieur","Indicative past future");
            if (temps===SUBJ_P) return getLang("Subjonctif présent","Subjunctive present");
            if (temps===SUBJ_PC) return getLang("Subjonctif passé","Subjunctive past");
            if (temps===SUBJ_I) return getLang("Subjonctif imparfait","Subjunctive imperfect");
            if (temps===SUBJ_PQP) return getLang("Subjonctif plus-que-parfait","Subjunctive pluperfect");
            if (temps===COND_P) return getLang("Conditionnel présent","Conditional present");
            if (temps===COND_PC) return getLang("Conditionnel passé première forme","Conditional first past");
            if (temps===COND_P2) return getLang("Conditionnel passé deuxième forme","Conditional second past");
            if (temps===IMP_P) return getLang("Impératif présent","Imperative present");
            if (temps===IMP_PC) return getLang("Impératif passé","Imperative past");
            if (temps===INF_P) return getLang("Infinitif présent","Infinitive present");
            if (temps===INF_PP) return getLang("Infinitif passé","Infinitive past");
            if (temps===GER_P) return getLang("Gérondif présent","Gerondive present");
            if (temps===GER_PP) return getLang("Gérondif passé","Gerondive Past");
            if (temps===PART_PR) return getLang("Participe présent","Participle present");
            if (temps===PART_ALL) return getLang("Participe passé","Participle past");
            if (temps===PART_P) return getLang("Participe passé masculin singulier","Participle past masculine singular");
            if (temps===PART_PF) return getLang("Participe passé féminin singulier","Participle past feminine singular");
            if (temps===PART_PP) return getLang("Participe passé masculin pluriel","Participle past masculine plural");
            if (temps===PART_PFP) return getLang("Participe passé féminin pluriel","Participle past feminine plural");
            if (temps===PART_GER) return getLang("Participe passé gérondif","Participle past gerundive");
            if (temps===FUTUR_PROCHE) return getLang("Futur proche","Near future");
            if (temps===PASSE_PROCHE) return getLang("Passé proche","Near past");
            if (temps===AUCUN) return " ";
            break;
            case DETAIL_TEMPS:
            if (temps===IND_P) return getLang("Présent","Present");
            if (temps===IND_PC) return getLang("Passé composé","Present perfect");
            if (temps===IND_I) return getLang("Imparfait","Imperfect");
            if (temps===IND_PQP) return getLang("Plus-que-parfait","Pluperfect");
            if (temps===IND_PS) return getLang("Passé simple","Simple past");
            if (temps===IND_PA) return getLang("Passé antérieur","Past perfect");
            if (temps===IND_FS) return getLang("Futur simple","Future");
            if (temps===IND_FA) return getLang("Futur antérieur","Past future");
            if (temps===SUBJ_P) return getLang("Présent","Present");
            if (temps===SUBJ_PC) return getLang("Passé","Past");
            if (temps===SUBJ_I) return getLang("Imparfait","Imperfect");
            if (temps===SUBJ_PQP) return getLang("Plus-que-parfait","Pluperfect");
            if (temps===COND_P) return getLang("Présent","Present");
            if (temps===COND_PC) return getLang("Passé première forme","First past");
            if (temps===COND_P2) return getLang("Passé deuxième forme","Second past");
            if (temps===IMP_P) return getLang("Présent","Present");
            if (temps===IMP_PC) return getLang("Passé","Past");
            if (temps===INF_P) return getLang("Présent","Present");
            if (temps===INF_PP) return getLang("Passé","Past");
            if (temps===GER_P) return getLang("Présent","Present");
            if (temps===GER_PP) return getLang("Passé","Past");
            if (temps===PART_PR) return getLang("Présent","Present");
            if (temps===PART_ALL) return getLang("Passé","Past");
            if (temps===PART_P) return getLang("Passé","Past");
            if (temps===PART_PF) return getLang("Passé","Past");
            if (temps===PART_PFP) return getLang("Passé","Past");
            if (temps===PART_PP) return getLang("Passé","Past");
            if (temps===PART_GER) return getLang("Passé gérondif","Past gerundive");
            if (temps===FUTUR_PROCHE) return getLang("Futur proche","Near future");
            if (temps===PASSE_PROCHE) return getLang("Passé proche","Near past");
            if (temps===AUCUN) return " ";		    
            break;	
            case DETAIL_MODE:
            if (temps===MODE_INDICATIF) return getLang("Indicatif","Indicative");
            if (temps===MODE_SUBJONCTIF) return getLang("Subjonctif","Subjunctive");
            if (temps===MODE_CONDITIONNEL) return getLang("Conditionnel","Conditional");
            if (temps===MODE_IMPERATIF) return getLang("Impératif","Imperative");
            if (temps===MODE_IMPERSONNEL) return getLang("Temps impersonnels","Impersonal tenses");
            if (temps===MODE_INFINITIF) return getLang("Infinitif","Infinitive");
            if (temps===MODE_GERONDIF) return getLang("Gérondif","Gerundive");
            if (temps===MODE_PARTICIPE) return getLang("Participe","Participle");
            if (temps===MODE_SYNONYME) return getLang("Synonyme","Synonym");
            if (temps===MODE_PROCHE) return getLang("Tournure de phrase","Shape of sentence");
            if (temps===AUCUN) return " ";
            break;		    	  
            default:
                return "";
        }
    }

    /** Cette fonction renvoie la personne sous format texte (ex: Première personne du singulier)
    * @param string persid Valeur parmi les constantes JE, TU, IL, NOUS, VOUS, ILS
    * @return string */
export function getPersonne(persid) {
    if (persid===AUCUN) return "-<br />&nbsp;";
    const searchPersonneFr = [
        "Première personne du singulier",
        "Deuxième personne du singulier",
        "Troisième personne du singulier",
        "Première personne du pluriel",
        "Deuxième personne du pluriel",
        "Troisième personne du pluriel",
        "Troisième personne du singulier",
        "Troisième personne du pluriel",
        "Troisième personne du singulier",
        "Troisième personne du singulier",
        "-",
        "Deuxième personne du singulier",
        "Première personne du pluriel",
        "Deuxième personne du pluriel",
        ""];
    const searchPersonneUk = [
        "Singular 1<sup>st</sup> person",
        "Singular 2<sup>nd</sup> person",
        "Singular 3<sup>rd</sup> person",
        "Plural 1<sup>st</sup> person",
        "Plural 2<sup>nd</sup> person",
        "Plural 3<sup>rd</sup> person",
        "Singular 3<sup>rd</sup> person",
        "Plural 3<sup>rd</sup> person",
        "Singular 3<sup>rd</sup> person",
        "Singular 3<sup>rd</sup> person",
        "-",
        "Singular 2<sup>nd</sup> person",
        "Plural 1<sup>st</sup> person",
        "Plural 2<sup>nd</sup> person",
        ""];
    //personne
        return getLang(searchPersonneFr[persid],searchPersonneUk[persid]);
    }

    /** Cette fonction renvoie le groupe du verbe sous format texte (ex: Premier groupe).
    * @return string */
export function formateGroupe(groupe) {
        let g ="";
        if (groupe===4) g=getLang("Auxiliaire","Auxiliary");
        else if (groupe===1) g=getLang("<i className='fa-light fa-2x fa-square-1'></i> Verbe du premier groupe","First group");
        else if (groupe===2) g=getLang("<i className='fa-light fa-2x fa-square-2'></i> Verbe du deuxième groupe","Second group");
        else if (groupe===3) g=getLang("<i className='fa-light fa-2x fa-square-3'></i> Verbe du troisième groupe","Third group");
        else if (groupe===0) g=getLang("Aucun groupe","No group");
        return g;
    }  	


    
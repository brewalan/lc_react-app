import React from 'react';
import './NuageVerbe.css'




 

class NuageVerbe extends React.Component {

  taille10 = ["être","avoir"];
  taille9 = ["pouvoir","faire","aller"];
  taille8 = ["envoyer","prendre","devoir","permettre","mettre"];
  taille7 = ["dire","savoir","partir","appeler","voir","aimer","joindre","finir","venir","manger"];
  taille6 = ["essayer","écrire","recevoir","comprendre","connaître","courir","croire","asseoir","rappeler","inclure","choisir",
  "falloir","lire","créer","fournir","penser","apprendre","répondre","plaire","boire","parler","dormir","oublier","résoudre","mourir",
  "rendre","passer","vouloir","donner","établir","paraître","payer","jouer","rire","prévoir","réussir","plaindre","arriver","convenir",
  "remplir","chanter","définir","remettre","conclure","préférer","acheter","perdre","revenir","craindre","hésiter","apparaître",
  "entendre","jeter","renvoyer","atteindre","pleuvoir","demander","devenir","saisir","ouvrir","espérer","naître","agir","remercier",
  "rejoindre","apercevoir","descendre","commencer","continuer","peindre","regarder","arrêter","inscrire","reprendre","réfléchir",
  "promettre","rester","battre","ennuyer","garantir"];
  taille5 = ["attendre","aboutir","accueillir","acquérir","aider","amener","apporter","apprécier","appuyer","avertir","bouillir",
  "changer","chercher","clore","conduire","construire","contacter","convaincre","correspondre","coudre","crier","croître","cueillir",
  "découvrir","décrire","désirer","disparaître","écouter","effectuer","émettre","emmener","employer","entrer","éteindre","étudier",
  "exclure","faillir","fuir","grandir","habiter","haïr","inquiéter","intéresser","investir","laisser","lever","maintenir","manquer",
  "marcher","marier","mentir","monter","moudre","nettoyer","nuire","obtenir","occuper","offrir","ouïr","parcourir","présenter",
  "prévenir","prier","produire","profiter","promouvoir","reconnaître","rencontrer","rentrer","repartir","répartir","requérir",
  "ressentir","retenir","réunir","revoir","sentir","seoir","servir","sortir","souhaiter","soumettre","sourire","souvenir",
  "subir","suffire","suivre","taire","tenir","tomber","transférer","transmettre","travailler","trouver","vaincre","valoir",
  "vendre","vérifier","vivre"];
  taille4 = ["abandonner","abattre","absoudre","accéder","accepter","accompagner","accomplir","accorder","accroître",
  "acquiescer","admettre","admirer","adorer","adresser","agrandir","agréer","ajouter","améliorer","amuser","annoncer","annuler",
  "appartenir","applaudir","apprêter","approfondir","arranger","assister","assurer","atteler","atterrir","attraper","attribuer",
  "avancer","avérer","avouer","balayer","bâtir","bénéficier","bondir","bouger","cacher","casser","céder","charger","choir",
  "citer","cliquer","combattre","commettre","communiquer","compatir","compléter","compter","concerner","concevoir","concourir",
  "confier","confirmer","confondre","conjuguer","conquérir","conseiller","consentir","considérer","constater","constituer",
  "contenir","contraindre","contribuer","convertir","convier","copier","corriger","côtoyer","coucher","couper","coûter","couvrir",
  "cuire","danser","décevoir","décider","déduire","défendre","déjeuner","démarrer","déménager","dépêcher","dépendre","déranger",
  "desservir","détenir","détruire","développer","dîner","diriger","discuter","dissoudre","distraire","douter","durer","échoir",
  "éclaircir","effacer","élargir","élire","embêter","embrasser","émouvoir","empêcher","endormir","enfuir","engager","enlever",
  "enquérir","enrichir","entraîner","entreprendre","entretenir","envahir","envier","envisager","épeler","essuyer","étendre",
  "étonner","éviter","évoluer","excuser","exister","expliquer","extraire","feindre","fermer","fêter","fier","fonctionner","fondre",
  "franchir","fumer","gagner","garder","geler","gêner","gérer","gésir","grossir","guérir","habiller","imaginer","indiquer","informer",
  "installer","intégrer","interdire","interroger","interrompre","intervenir","introduire","inviter","jouir","lâcher","lancer","laver",
  "lier","louer","maigrir","médire","mener","mentionner","mériter","modifier","montrer","mordre","mouvoir","nager","nourrir",
  "noyer","obéir","octroyer","oindre","omettre","organiser","oser","paître","parier","partager","participer","parvenir","pendre",
  "percevoir","peser","placer","planifier","pleurer","plier","porter","poser","posséder","pourrir","poursuivre","pourvoir",
  "préciser","préparer","prétendre","prêter","privilégier","procéder","projeter","promener","proposer","protéger","puer",
  "punir","quitter","raconter","ralentir","ramener","ranger","rattraper","ravir","réagir","réaliser","recueillir","récupérer","réduire",
  "refaire","référer","refuser","régir","régler","regretter","rejeter","réjouir","relayer","relire","remplacer","renouveler",
  "répéter","reposer","représenter","respecter","ressortir","rétablir","retourner","retrouver","réveiller","révéler","rêver",
  "revêtir","rompre","rougir","salir","saluer","satisfaire","sauter","sembler","serrer","signer","signifier","situer","souffrir",
  "souscrire","soutenir","sucer","suggérer","supposer","surprendre","surseoir","survivre","suspendre","taper","teindre","téléphoner",
  "tendre","tenter","terminer","tester","tirer","tourner","traduire","trahir","traire","traiter","tromper","tuer","unir","utiliser",
  "vêtir","vieillir","visiter","voler","vomir","voyager"];
  taille3 = ["abaisser","abîmer","abolir","aborder","aboyer","abriter","absenter","abstenir","abuser","accélérer","accourir",
  "accrocher","accroire","accuser","achever","acquitter","adapter","adhérer","adjoindre","administrer","adopter","adoucir","advenir",
  "aérer","affaiblir","agacer","agiter","allier","allonger","allumer","alourdir","amortir","amuïr","analyser","anéantir","aplatir",
  "apparoir","appendre","appliquer","appréhender","approcher","approprier","approuver","arrondir","arroser","assaillir","associer",
  "assortir","assujettir","astreindre","attacher","attaquer","attirer","augmenter","autoriser","avaler","aviser","axer","baigner",
  "bailler","bâiller","baisser","balader","balancer","bannir","baser","bavarder","bayer","bégayer","bénir","biter","blanchir","blesser",
  "bloquer","blottir","bosser","braire","branler","briller","broyer","brûler","calculer","caler","calmer","caresser","causer","ceindre",
  "célébrer","certifier","cesser","chaloir","chérir","choyer","clôturer","coller","colorier","commander","comparer","complaire",
  "composer","compromettre","concentrer","connecter","consacrer","conserver","consister","consulter","contenter","conter","contredire",
  "contrôler","coordonner","corrompre","coter","couler","croiser","cuisiner","daigner","débarrasser","débattre","débrouiller",
  "débuter","décéder","déchoir","déclarer","déclencher","décourager","décroître","dédier","défaillir","défaire","défier","dégager",
  "démentir","demeurer","démolir","départir","dépasser","dépenser","déplacer","déplaire","déployer","déposer","dérouler","désespérer",
  "désobéir","désoler","dessiner","détailler","déteindre","détendre","détester","deviner","différencier","différer","diminuer",
  "disposer","disputer","distinguer","distribuer","divertir","éblouir","échanger","échapper","écher","échouer","éclairer","éclater",
  "éclore","écrier","efforcer","effrayer","égayer","élever","éloigner","embellir","émier","emplir","emporter","emprunter","encourager",
  "encourir","énerver","enfouir","enfreindre","engendrer","engloutir","enjoindre","enregistrer","enseigner","ensuivre","entamer",
  "entourer","entre-haïr","entrevoir","envoler","épanouir","épater","éprouver","équivaloir","errer","ester","estimer","étayer",
  "étiqueter","étreindre","évaluer","évanouir","évoquer","exagérer","exciter","exécuter","exercer","exiger","expédier","exprimer",
  "fabriquer","fâcher","facturer","fatiguer","faxer","féliciter","fendre","feuilleter","figurer","filer","fixer","flatter","fleurir",
  "foncer","forcer","former","frapper","frayer","frémir","frire","garer","garnir","gâter","geindre","gémir","générer","glisser",
  "goûter","gravir","gréer","guetter","habituer","haler","hâler","harceler","hâter","héberger","honorer","huer","identifier",
  "ignorer","immiscer","impressionner","imprimer","induire","influencer","initier","insérer","insister","instruire","interagir",
  "interpeller","interpréter","issir","jaillir","jaunir","juger","jurer","justifier","languir","lasser","lécher","libérer",
  "livrer","loger","luire","lutter","mâcher","maîtriser","maquiller","marquer","mater","mâter","maudire","méfier","mélanger",
  "mêler","menacer","méprendre","mesurer","modeler","moquer","mouler","munir","mûrir","naviguer","nécessiter","négocier",
  "neiger","nier","noircir","nommer","noter","nouer","obliger","observer","occire","opérer","opter","ôter","ouvrer","pâlir",
  "pallier","pardonner","parer","parfaire","passionner","patienter","pâtir","pécher","pêcher","peigner","peler","pencher","pénétrer",
  "périr","pétrir","plaisanter","planter","plonger","poindre","polir","polluer","pondre","poster","pousser","pratiquer",
  "précéder","prédire","préoccuper","prescrire","pressentir","presser","prévaloir","procurer","programmer","prononcer","prouver",
  "provenir","provoquer","publier","qualifier","querir","quérir","rabattre","raccourcir","rafraîchir","rajeunir","rajouter",
  "râler","ramasser","rapporter","rapprocher","raser","rasseoir","rassurer","rater","rayer","réapparaître","rebondir","recenser",
  "réceptionner","rechercher","réciter","recommander","recommencer","recontacter","recoudre","recourir","recouvrir","rectifier",
  "rédiger","redire","réécrire","réessayer","refléter","refroidir","régner","réitérer","relancer","relever","relier","remarquer",
  "remonter","remuer","renaître","renoncer","renseigner","répandre","réparer","repeindre","repentir","repérer","répertorier","reporter",
  "reprocher","reproduire","réserver","résilier","respirer","ressaisir","ressembler","restreindre","retentir","retirer","retranscrire",
  "retransmettre","rétrécir","réviser","rigoler","risquer","rouler","rouvrir","saouler","sauver","scier","sécher","secouer","secourir",
  "séduire","sélectionner","semer","séparer","sévir","signaler","skier","soigner","solliciter","songer","sonner","soucier","souffler",
  "soulever","soupçonner","sourdre","soustraire","statuer","stocker","succéder","suer","suppléer","supplier","supporter","supprimer",
  "surgir","surveiller","survenir","susciter","tacher","tâcher","tapir","tarder","tarir","téter","têter","tondre","tordre","toucher",
  "tracer","traîner","transcrire","transformer","traverser","tressaillir","trier","tutoyer","urger","user","valider","varier","veiller",
  "venger","vernir","verser","vider","viser","vouer","vouvoyer"];
  nuage = [];

  /* shuffle the array */
  shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5); 
  }

  /* randomize array and return x items */
  arrayRand(myArray, nb) {
    /* copy array */
    let arr = myArray.slice(0,this.length);
    /* shuffle array */
    arr = this.shuffleArray(arr);
    /* return first elements */
    return arr.slice(0,nb);
  }

  /* add random verbs in nuage */
  addNuage(arr, nb, taille) {
    let arrNuage = this.arrayRand(arr,nb);
    arrNuage.forEach(element => { 
      this.nuage.push({verbe: element,taille: taille, separateur: " - "});
    }); 
  }

  /* generate nuage verb */
  generateNuageVerbe() {
    this.nuage = [];
    this.addNuage(this.taille10,2,"t1")
    this.addNuage(this.taille9,3,"t1");
    this.addNuage(this.taille8,4,"t2");
    this.addNuage(this.taille7,6,"t2");
    this.addNuage(this.taille6,8,"t3");
    this.addNuage(this.taille5,10,"t4");
    this.addNuage(this.taille4,20,"t5");
    this.addNuage(this.taille3,25,"t6");
    this.nuage = this.shuffleArray(this.nuage);
    this.nuage[this.nuage.length-1].separateur="";
  }


  constructor() {
    super();
    this.generateNuageVerbe();   
  }

  render() {
    const listVerbe = this.nuage.map((element) =>
      <VerbeDuNuage key={element.verbe} verbe={element.verbe} taille={element.taille} separateur={element.separateur} />
    );
    return (
      <div className="NuageVerbe">
        {listVerbe}
      </div>
    );
  }
}

class VerbeDuNuage extends React.Component {
  render() {
    return (
      <span><button className={this.props.taille}>{this.props.verbe}</button>{this.props.separateur}</span>
    );
  }
}

export default NuageVerbe;
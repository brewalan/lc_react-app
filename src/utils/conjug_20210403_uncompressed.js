/**
 * Afficher l'avertissement sur l'utilisation des cookies
 * http://www.fobec.com/tuto/1172/afficher-avertissement-sur-utilisation-cookies.html
 * @author Fobec septembre 2015
 */
var Cookie_Eu = {
    //Ecrire un cookie contenant la date d'acceptation
    write: function(d) {
        var buf = '';
        if (d) {
            var date = new Date();
            date.setTime(date.getTime() + (d * 24 * 60 * 60 * 1000));
            buf = "cookie_policy_validation=agree; expires=" + date.toGMTString() + "; domain=" + document.domain + ";";
            document.cookie = buf; 
            var div = document.getElementById('cookie_policy_msg');
            if (div) {
                div.parentNode.removeChild(div);
            }
        }
    },
    //Cherche le cookie contenant la date d'acceptation
    isSet: function()
    {
        var nameEQ = "cookie_policy_validation=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                var val = c.substring(nameEQ.length, c.length);
                if (val.trim() === 'agree') {
                    return true;
                }
            }
        }
        return false;
    },
    //Afficher le bandeau d'avertissement
    askForAgree: function() {
        if (this.isSet() == false) {
            var div_cookie = document.createElement('div');
            div_cookie.id = 'cookie_policy_msg';
            div_cookie.className = 'cookie_policy_msg';
            var t = getLang("<div>En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies utilisés pour les publicités et pour les statistiques de visite,","<div>By continuing your visit to this site, you accept the use of Cookies used for advertisements and for statistics of visit.");
            t += '<a href="https://leconjugueur.lefigaro.fr/'+getLang('','uk-')+'politique-cookie.php">'+getLang('en savoir plus','more information')+'</a><a href="javascript:Cookie_Eu.write(365);">OK</a></div>'; 
            div_cookie.innerHTML = t;
			document.body.appendChild(div_cookie);
        }
    }
};
//Lancer le test d'existance du cookie
Cookie_Eu.askForAgree();

  /** Cette fonction permet de renvoyer un texte dans la langue choisit en paramètre.
    * @param string fr Texte en français
    * @param string uk Texte en anglais
    * @return string */
  function getLang(fr,en) {
    if (lang=="fr") return fr; 
	else if (lang=="en") return en;
	else if (lang=="uk") return en;
	else return fr;
  }



function clickage(val){document.getElementById('v').value+=val;document.getElementById('v').focus();}
function aide(){var locx = screen.width-580;var conjug = window.open("","LeConjugueur","width=570,height=560,resizable=yes,scrollbars=yes,status=no,location=no,toolbar=no,left="+locx+",top=5");conjug.location="/autrephp/fraideconjonline.php?printable=Y&aide=Y";conjug.focus();}
function traiteVb(texte){
	texte=texte.toLowerCase();
	texte=texte.replace(/[\!\?]/g,"");
	texte=texte.replace(/^(se |s'|s'en |ne |ne pas |no )/g,"");
	texte=vbSansAccent(texte);
	return texte;
}		
function vbSansAccent(texte){
	texte=texte.replace(/[éèêë]/g,"e");
	texte=texte.replace(/[áàâä]/g,"a");
	texte=texte.replace(/[íìîï]/g,"i");
	texte=texte.replace(/[óòôö]/g,"o");
	texte=texte.replace(/[úùûü]/g,"u");
	texte=texte.replace(/[ñ]/g,"n");
	return texte;
}		

//envoie un verbe après quelques temps
var global_timeout_check;
var prop;
function checkCache(cacheVerbe,verbe) {
	var nb = cacheVerbe.length;
	var j=0;
	for(;j<nb;j++) {
		var vb = vbSansAccent(cacheVerbe[j]);
		if (vb.startsWith(verbe)) {
			prop.push(cacheVerbe[j]);
		}
	}
}
function update(verbe,l,f) {
	var chercheDiv = document.getElementById("cherche");
	if (verbe=="") {
		chercheDiv.innerHTML = "";		
		chercheDiv.style.visibility = 'hidden';
		return;
	}
	//vérifie si le verbe est dans le cache
	var htmlResult="";
	prop=Array();
	checkCache(cacheVerbe1,verbe);
	checkCache(cacheVerbe2,verbe);
	checkCache(cacheVerbe3,verbe);
		
	if (prop.length > 0) {
		prop=prop.slice(0, 9);
		htmlResult+= "<p>"+getLang("Verbes proposés à la conjugaison :","Proposed verbs:","Verbos propuestos a la conjugación :")+"</p>\n";	
		htmlResult+= "<p>";

		//formatte les propositions de verbe
		var nb = prop.length;
		var i=0;
		for(var j=0;j<nb;j++) {
			var vb = prop[j];
			htmlResult+=formateURLVerbe(vb);
			if (i<nb-1) {
				htmlResult+=" | ";
			}
			i++;
		}
		htmlResult+= "</p>";
	
		chercheDiv.style.visibility = 'visible';
		chercheDiv.innerHTML = htmlResult;		
		
	} else {	
		clearTimeout(global_timeout_check);
		global_timeout_check = setTimeout("update_after_timeout('"+verbe+"','"+l+"','"+f+"');",400);
	}
}
function update_after_timeout(vb,l,f){
	clearTimeout(global_timeout_check);
	submitForm(vb,l);
}
//fonction ajax
function submitForm(verbe,lang) { 
	//lance une requête sur le serveur
	var xhr = null;
	if (window.XMLHttpRequest) { xhr = new XMLHttpRequest(); }
	else { 
		if (window.ActiveXObject) { 
			xhr = new ActiveXObject('MSXML2.XMLHTTP.3.0');
		}
	}
	if (xhr!=null) { 
		xhr.onreadystatechange  = function() {
			if (xhr.readyState  == 4) { 
				if (xhr.status  == 200) {
					var chercheDiv = document.getElementById("cherche");
					chercheDiv.style.visibility = 'visible';
					chercheDiv.innerHTML = xhr.responseText;
				} else { 
					document.getElementById("cherche").style.visibility = 'hidden'; 
				}
			}
		};
		xhr.open( "GET", "/php5/dicoAjax.php?verbe="+verbe+"&lang="+lang,true); 
		xhr.send(null);
	}
}

//---------------------------------------
//pour les verbes favoris
//renvoi un tableau avec les éléments distincts
function array_unique(vbPropose) {
	var temp=new Array();
	for(var i=0;i<vbPropose.length;i++) {
		var trouve=false;
		for(var j=0;j<temp.length;j++) {
			if (vbPropose[i]==temp[j]) trouve=true;
		}
		if (!trouve) {
			temp.push(vbPropose[i]);
		}
	}
	return temp;
}	

//enregistre les verbes favoris
function verbeFavori(vb,lang) {
	var txt="";
	if (('localStorage' in window) && window.localStorage !== null) {
		var vbNav = "";
		var vbPropose = Array();
		if (localStorage.hasOwnProperty('vbNav')) {
			//récupère les verbes favoris
			vbNav = localStorage['vbNav'];
			vbPropose = vbNav.split(",");	
		}
		if (vb!="") {
			vbPropose.reverse();
			vbPropose.push(vb);		
			vbPropose=array_unique(vbPropose);
		}
		vbPropose.reverse();
		vbPropose=vbPropose.slice(0,5);
		vbNav="";
		for(var j=0;j<vbPropose.length;j++) {
			vbNav+=vbPropose[j]+",";
		}
		vbNav=vbNav.substr(0,vbNav.length-1);
		//enregistrement des verbes favoris
		localStorage['vbNav']=vbNav;

		if (vbPropose.length==0) {
			//pas de verbe à afficher
			return "<p>"+getLang("Aucun verbe","No verb")+"</p>";
		} else {
			//retourne le texte du verbe favoris
			txt="<p>";
			for(var i=0;i<vbPropose.length;i++) {
				if ((vbPropose[i]!="null") && (vbPropose[i]!="undefined") && (vbPropose[i]!=""))
					txt+=formateURLVerbe(vbPropose[i])+" - ";
			}	
			//txt=txt.substr(0,txt.length-3);
			txt+="<a href=\"javascript:effacerListe()\">";
			txt+=getLang("Effacer cette liste","Clear this list");
			txt+="</a>";
			txt+="</p>";
		}
	}
	return txt;	
}

function formateURLVerbe(vb) {
  var txt="";
  var url=getLang("/conjugaison/verbe/","/french/verb/");
  txt="<a href=\""+url+escape(vb)+".html\">"+vb+"</a>";
  return txt;
}

//efface la liste de verbe enregistrée
function effacerListe() {
	if (('localStorage' in window) && window.localStorage !== null) {
		localStorage['vbNav']='';
		document.getElementById('consulte').innerHTML=getLang("Aucun verbe","No verb");
	}
}

//------------------------------------------------------

//détermine le badge d'application
function setBadge() {
	var browser=navigator.userAgent.toUpperCase();
	var txt="";
	var lang2 = "fr";
	if (lang=="uk") lang2="en"; 
	if (browser.indexOf("KINDLE") != -1)
		txt="<a href=\"amzn://apps/android?s=com.leconjugueur.droid2\"><img alt=\"T&eacute;l&eacute;charger l'application pour le Kindle\" src=\"https://w5c2n4b4.stackpathcdn.com/images/amazon-blanc.png\" width=\"220px\" /></a>";	
	else if (browser.indexOf("WINDOWS") != -1)  //windows store 10
		txt="<a href=\"https://www.microsoft.com/store/apps/9wzdncrdmm29\"><img alt=\"T&eacute;l&eacute;charger l'application pour Windows 10\" src=\"https://w5c2n4b4.stackpathcdn.com/images/WindowsStore-"+lang2+".svg\" width=\"220px\" height=\"78px\" /></a>";	
	else if (browser.indexOf("MACINTOSH") != -1) //mac store
		txt="<a href=\"https://itunes.apple.com/fr/app/le-conjugueur-conjugaison/id402968263?mt=12&ls=1\"><img alt=\"Disponible sur le Mac App Store\" src=\"https://w5c2n4b4.stackpathcdn.com/images/macstore-"+lang2+".svg\" width=\"220px\" height=\"70px\" /></a>";	
	else if (browser.indexOf("HMSCORE") != -1) //huawei store	
		 txt="<a href=\"https://appgallery.cloud.huawei.com/ag/n/app/C100116389?channelId=Le+Conjugueur&id=dc28774001f845d0933aa7cd0a1c0cb1&s=08776AC88FEB1C4C7288F6773FF4A07DC5679A0F8218D646DBAC54E5A55C0A37&detailType=0&v=\"><img alt=\"Disponible sur l'AppGallery\" src=\"https://w5c2n4b4.stackpathcdn.com/images/appgallery-"+lang2+".png\" width=\"220px\" /></a>";	
		
	var element=document.getElementById('badge');
	if (element != null) 
		element.innerHTML+=txt;
}
setBadge();

var element = document.getElementById('consulte');
if (element != null) 
	element.innerHTML=verbeFavori(vbFav,lang);

//--------------------------------------------------------
//partie pour la recherche d'un verbe
var cacheVerbe1=["être","avoir","pouvoir","faire","aller","envoyer","prendre","devoir","permettre","mettre","dire","savoir","partir","appeler","voir","aimer","joindre","finir","venir","manger"];
var cacheVerbe2=["essayer","écrire","recevoir","comprendre","connaître","courir","croire","asseoir","rappeler","inclure","choisir",
	"falloir","lire","créer","fournir","penser","apprendre","répondre","plaire","boire","parler","dormir","oublier","résoudre","mourir",
	"rendre","passer","vouloir","donner","établir","paraître","payer","jouer","rire","prévoir","réussir","plaindre","arriver","convenir",
	"remplir","chanter","définir","remettre","conclure","préférer","acheter","perdre","revenir","craindre","hésiter","apparaître",
	"entendre","jeter","renvoyer","atteindre","pleuvoir","demander","devenir","saisir","ouvrir","espérer","naître","agir","remercier",
	"rejoindre","apercevoir","descendre","commencer","continuer","peindre","regarder","arrêter","inscrire","reprendre","réfléchir",
	"promettre","rester","battre","ennuyer","garantir","attendre","aboutir","accueillir","acquérir","aider","amener","apporter","apprécier","appuyer","avertir","bouillir","changer","chercher","clore","conduire","construire","contacter","convaincre","correspondre","coudre","crier","croître","cueillir","découvrir","décrire","désirer","disparaître","écouter","effectuer","émettre","emmener","employer","entrer","éteindre","étudier","exclure","faillir","fuir","grandir","habiter","haïr","inquiéter","intéresser","investir","laisser","lever","maintenir","manquer","marcher","marier","mentir","monter","moudre","nettoyer","nuire","obtenir","occuper","offrir","ouïr","parcourir","présenter","prévenir","prier","produire","profiter","promouvoir","reconnaître","rencontrer","rentrer","repartir","répartir","requérir","ressentir","retenir","réunir","revoir","sentir","seoir","servir","sortir","souhaiter","soumettre","sourire","souvenir","subir","suffire","suivre","taire","tenir","tomber","transférer","transmettre","travailler","trouver","vaincre","valoir","vendre","vérifier","vivre"];
var cacheVerbe3=["abandonner","abattre","absoudre","accéder","accepter","accompagner","accomplir","accorder","accroître",
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

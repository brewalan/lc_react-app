import ConjBank from "../features/ConjBank";

/* Generate some verbs when starting to key down */
class ConjTypo extends ConjBank {

    prop = [];

    traiteVb(texte){
        texte=texte.toLowerCase();
        texte=texte.replace(/[!?]/g,"");
        texte=texte.replace(/^(se |s'|s'en |ne |ne pas |no )/g,"");
        texte=this.vbSansAccent(texte);
        return texte;
    }		
    vbSansAccent(texte){
        texte=texte.replace(/[éèêë]/g,"e");
        texte=texte.replace(/[áàâä]/g,"a");
        texte=texte.replace(/[íìîï]/g,"i");
        texte=texte.replace(/[óòôö]/g,"o");
        texte=texte.replace(/[úùûü]/g,"u");
        texte=texte.replace(/[ñ]/g,"n");
        return texte;
    }		
    

    checkCache(cacheVerbe,verbe) {
        const nb = cacheVerbe.length;
        let j=0;
        for(;j<nb;j++) {
            const vb = this.vbSansAccent(cacheVerbe[j]);
            if (vb.startsWith(verbe)) {
                this.prop.push(cacheVerbe[j]);
            }
        }
    }    

    getConjTypo(verbe) {
        verbe = this.traiteVb(verbe);
        if (verbe==="") return [];
        //vérifie si le verbe est dans le cache
        this.prop=[];
        this.checkCache(this.taille10,verbe);
        this.checkCache(this.taille9,verbe);
        this.checkCache(this.taille8,verbe);
        this.checkCache(this.taille7,verbe);
        this.checkCache(this.taille6,verbe);
        this.checkCache(this.taille5,verbe);
        this.checkCache(this.taille4,verbe);
        this.checkCache(this.taille3,verbe);
 
        if (this.prop.length > 0) {
            this.prop=this.prop.slice(0, 9);
           
        } else {	
           // clearTimeout(global_timeout_check);
           // global_timeout_check = setTimeout("update_after_timeout('"+verbe+"','"+l+"','"+f+"');",400);
        }

        return this.prop;
    }
    update_after_timeout(vb,l,f){
//        clearTimeout(global_timeout_check);
//        submitForm(vb,l);
    }
    //fonction ajax
    submitForm(verbe,lang) { 
        //lance une requête sur le serveur
/*        var xhr = null;
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
        }*/
    }    
}

export default ConjTypo;
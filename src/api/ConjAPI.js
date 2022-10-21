import { array_unique } from "../utils/array_unique";

/* Get the verb cache and store it for better performance */
class ConjAPI {
    cacheVerbe = [];
    historyVerbe = [];

    constructor() {
        this.loadCache();
    }

    /* retrieve verbe history */
    getHistoryVerbe() {
        return this.historyVerbe.slice(-10).reverse();
    }

    /* delete verbe history */
    resetHistoryVerbe() {
        this.historyVerbe = [];
    }

    /* save cache locally */
    saveCache() {
        localStorage.setItem("LCREACT-CACHE", JSON.stringify(this.cacheVerbe));    
    }

    /* delete all cache */
    clearCache() {
        this.cacheVerbe=[];
        localStorage.removeItem("LCREACT-CACHE");
    }

    /* charge le cache initial */
    loadCache() {
        if (localStorage.hasOwnProperty('LCREACT-CACHE')) {
            this.cacheVerbe = JSON.parse(localStorage.getItem('LCREACT-CACHE'));
            return;
        }

        const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v=gencache'
            fetch(urlVb)
            .then(results => results.json())
            .then(info => {
                this.cacheVerbe=info;
                this.saveCache();
              })
            .catch(console.log);   
    }

    /* vérifie si un verb est déjà dans le cache */
    getVerbeFromCache(vbKey) {
        return this.cacheVerbe.find((element) => (element.key === vbKey));
    }

    /* launch a promise to check if the verbe can be found from the cache or the server */
    getVerbeInfo(vb,param) {
        return new Promise((resolve,reject) => {
            // add in history
            this.historyVerbe.push(vb);
            this.historyVerbe=array_unique(this.historyVerbe);

            console.log(vb+param);
            
            //check in cache
            const cache = this.getVerbeFromCache(vb+param);
            if (typeof cache !== 'undefined') {
                console.log("from cache");
                console.log(this.cacheVerbe);
                resolve(cache);
            } else {
                
                //load from database
                const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v='+vb+'&p='+param
                    fetch(urlVb)
                    .then(results => results.json())
                    .then(info => {
                        //add in cache
                        if (!info.parametre.censure) {
                            this.cacheVerbe.push(info);
                            this.saveCache();
                        }
                        console.log("from server");
                        //return result
                        resolve(info);
                    })
                    .catch(console.log);   
                }
        });        

    }

}

export default ConjAPI;
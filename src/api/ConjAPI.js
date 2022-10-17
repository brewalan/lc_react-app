/* Get the verb cache and store it for better performance */
class ConjAPI {
    cacheVerbe = [];
    historyVerbe = [];

    constructor() {
        this.loadCache();
    }

    /* retrieve verbe history */
    getHistoryVerbe() {
        return this.historyVerbe;
    }

    /* charge le cache initial */
    loadCache() {
        const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v=gencache'
            fetch(urlVb)
            .then(results => results.json())
            .then(info => {
                this.cacheVerbe=info;
              })
            .catch(console.log);   
    }

    /* vérifie si un verb est déjà dans le cache */
    getVerbeFromCache(vb) {
        return this.cacheVerbe.find((element) => element.verbe === vb);
    }

    /* launch a promise to check if the verbe can be found from the cache or the server */
    getVerbeInfo(vb) {
        return new Promise((resolve,reject) => {
            // add in history
            this.historyVerbe.push(vb);

            //check in cache
            const cache = this.getVerbeFromCache(vb);
            if (typeof cache !== 'undefined') {
                //console.log("from cache");
                resolve(cache);
            } else {
                
                //load from database
                const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v='+vb
                    fetch(urlVb)
                    .then(results => results.json())
                    .then(info => {
                        //add in cache
                        this.cacheVerbe.push(info);
                        //console.log("from server");
                        //return result
                        resolve(info);
                    })
                    .catch(console.log);   
                }
        });        

    }

}

export default ConjAPI;
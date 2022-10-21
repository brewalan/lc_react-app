import ConjBank from "./ConjBank";

/* Generate a NuageVerbe with different sizes */
class NuageVerbeGenerator extends ConjBank {
    

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
      this.addNuage(this.taille4,10,"t5");
      this.addNuage(this.taille3,15,"t6");
      this.nuage = this.shuffleArray(this.nuage);
      this.nuage[this.nuage.length-1].separateur="";
    }
  
  
    constructor() {
      super();
      this.generateNuageVerbe();   
    }

    getNuageVerbe() {
        return this.nuage.slice();
    }
}

export default NuageVerbeGenerator
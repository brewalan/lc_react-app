import React from 'react';
import ReactDOM from 'react-dom/client';
import './VerbeInput.css'
import ConjugaisonVerbe from './conjugaison/ConjugaisonVerbe';
import ProposeVerbe from './conjugaison/ProposeVerbe';



const defaultVbConjug = {
  "verbe":"r",
  "HTTP_HOST":"leconjugueur.lefigaro.fr",
  "REMOTE_HOST":null,
  "parametre":{
    "originalVerbe":"r",
    "param":"",
    "feminin":false,
    "question":false,
    "negation":false,
    "passif":false,
    "auxiEtre":false,
    "auxiAvoir":false,
    "pronominal":false,
    "pronominalEn":false},
  "caracteristique":{
    "existe":false,
    "propose":["r\u00e9er","rire","ruer","rader","rager","raire","r\u00e2ler","ramer","\u00eatre"],
    "orthographe1990":false,
    "groupe":0,
    "autoriseFeminin":true,
    "autorisePassif":true,
    "autoriseAuxiEtre":false,
    "autorisePronominal":true,
    "autorisePronominalEn":false,
    "auxiliaire":0},
  "conjugaison":{
    "IND_P":"",
    "IND_PC":"",
    "IND_I":"",
    "IND_PQP":"",
    "IND_PS":"",
    "IND_PA":"",
    "IND_FS":"",
    "IND_FA":"",
    "SUBJ_P":"",
    "SUBJ_PC":"",
    "SUBJ_I":"",
    "SUBJ_PQP":"",
    "COND_P":"",
    "COND_PC":"",
    "COND_P2":"",
    "IMP_P":"",
    "IMP_PC":"",
    "PART_PR":"",
    "PART_ALL":"",
    "INF_P":"",
    "INF_PP":"",
    "GER_P":"",
    "FUTUR_PROCHE":"",
    "PASSE_PROCHE":""},
  "similaire":["-"]};

/* Class to control the input of a verb */
class VerbeInput extends React.Component {
    verbeConjugaison = ReactDOM.createRoot(document.getElementById('verbeConjug'));

    constructor(props) {
        super(props);
        this.state = {value: '',vbConjug: defaultVbConjug};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        console.log("handleChange "+ event.target.value);
      }
    
      handleSubmit(event) {
        //ending managing the event
        event.preventDefault();
        const vb = this.state.value;
        this.loadVerbe(vb);        
      }

      handleClick(e,vb) {
        e.preventDefault();
        this.setState({value: vb});
        console.log('this is:'+vb, this);
        this.loadVerbe(vb);
      };   

      /* start to load a new verb and update the screen */
      loadVerbe(vb) {
        if (vb==="") return;
        this.setState({
            loading: true
        }, () => {
            const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v='+vb
            fetch(urlVb)
            .then(results => results.json())
            .then(info => {
                this.setState({vbConjug: info});
                /* check if verbe exists */
                if (info.caracteristique.existe) {
                  //this.updateConjugueVerbe(info);
                } else {
                  //this.displayPropose(info);
                }
              })
            .catch(console.log);                
        });
      }

      componentDidMount(){
        this.inputVerbe.focus();
      }  
     



      /* display verb proposal */
      displayPropose(info) {
        const listPropose = this.state.vbConjug.caracteristique.propose.map((element) =>
          /*<VerbeDuNuage key={element.verbe} verbe={element.verbe} taille={element.taille} separateur={element.separateur} />*/
          console.log(element)
        );
        this.verbeConjugaison.render( 
          <React.StrictMode>
            <div className='alert alert-warning' role='alert'>
              <h3>Le verbe {info.parametre.originalVerbe} n'a pas été trouvé.</h3>
              <p>Voici une proposition de verbes :</p>
              <ul>
                {listPropose}
                <li><button className='bg-alert-warning' onClick={(e)=>this.handleClick(e,'aimer')}>aimer</button></li>
                <li><button onClick={(e)=>this.handleClick(e,'regarder')}>regarder</button></li>
              </ul>
            </div>
          </React.StrictMode>
        );
      }
      
      /* display text input bar for conjugaison */
      render() {
        //const vbExist=this.state.vbConjug.caracteristique.existe;
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
            <label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-duotone fa-magnifying-glass fa-2x"></i>
                </span>              
                <input ref={(input) => { this.inputVerbe = input; }} 
                  autoFocus 
                  name='inputVerbe' 
                  className="conjug" 
                  type="text"
                  placeholder="Verbe à conjuguer" 
                  value={this.state.value} 
                  onChange={this.handleChange} />
                  <input className='btn btn-outline-secondary' type="submit" value="Conjuguer" />
                </div>
              </label>
            </form>
            <ProposeVerbe propose={this.state.vbConjug.caracteristique.propose}  originalVerbe={this.state.vbConjug.parametre.originalVerbe} 
            existe={this.state.vbConjug.caracteristique.existe} />
            <ConjugaisonVerbe vbConjug={this.state.vbConjug} />
          </div>
        );
      }
}








export default VerbeInput;
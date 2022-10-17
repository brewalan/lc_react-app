import React from 'react';
import './VerbeInput.css'
import { nuage } from '..';
import ConjugaisonVerbe from './conjugaison/ConjugaisonVerbe';
import ProposeVerbe from './conjugaison/ProposeVerbe';
import NuageVerbeReact from './nuage/NuageVerbeReact';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




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
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          vbConjug: defaultVbConjug,
          nuageValue: nuage
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleVerbePropose = this.handleVerbePropose.bind(this);
      }

      /* when typing text in the input */
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      /* when click on conjuguer button */
      handleClick(e) {
        e.preventDefault();
        const vb = this.state.value;
        this.loadVerbe(vb);
        this.inputVerbe.focus();
      };  
      
      /* when clicking on a proposal verb or a nuage verb */
      handleVerbePropose(vb) {
        this.setState({value: vb});
        this.loadVerbe(vb);
      }

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

      /* focus by default on the Verbe Input after loading */
      componentDidMount(){
        this.inputVerbe.focus();
      }  
     


     
      /* render main page of conjugaison : 
      - input bar 
      - propose
      - conjugaison
      - nuage verbe */
      render() {
        //const vbExist=this.state.vbConjug.caracteristique.existe;
        return (
            <React.Fragment>
              <div className="input-group mb-3 mx-auto">
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
                <button 
                  className='btn btn-outline-secondary' 
                  onClick={this.handleClick} 
                  value={this.state.value}>
                    Conjuguer
                </button>
              </div>
              <div>
               
              </div>
            <ProposeVerbe 
              propose={this.state.vbConjug.caracteristique.propose}  
              originalVerbe={this.state.vbConjug.parametre.originalVerbe}
              existe={this.state.vbConjug.caracteristique.existe} 
              onVerbeChange={this.handleVerbePropose} />
            <ConjugaisonVerbe vbConjug={this.state.vbConjug} />
            <NuageVerbeReact 
              onVerbeChange={this.handleVerbePropose}
              nuageValue={this.state.nuageValue}  />
          </React.Fragment>
        );
      }
}






export default VerbeInput;
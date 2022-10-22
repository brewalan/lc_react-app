import React from 'react';
import './VerbeInput.css'
import { conjAPI, nuage } from '..';
import ConjugaisonVerbe from './conjugaison/ConjugaisonVerbe';
import ProposeVerbe from './proposition/ProposeVerbe';
import ProposeConjTypo from './proposition/ProposeConjTypo';
import NuageVerbeReact from './nuage/NuageVerbeReact';
import HistoryVerbeReact from './nuage/HistoryVerbeReact';
import { defaultVbConjug } from '../features/DefaultVbConj';
import { conjText, iconList } from '../features/ConjIcon';
import ButtonList from './bouton/ButtonList';
import LogicielBox from './bouton/LogicielBox';






/* Class to control the input of a verb */
class VerbeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          value: '',
          vbConjug: defaultVbConjug,
          requestFeminin: false,
          param: '',
          nuageValue: nuage,
          historyVerbe: []
        };
        
        /* manage the event */
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleVerbePropose = this.handleVerbePropose.bind(this);
        this.handleResetVerbeHistory = this.handleResetVerbeHistory.bind(this);
        this.handleRequestMasculin = this.handleRequestMasculin.bind(this);
        this.handleRequestFeminin = this.handleRequestFeminin.bind(this);
        this.handleRequestQuestion = this.handleRequestQuestion.bind(this);
        this.handleRequestNegation = this.handleRequestNegation.bind(this);
        this.handleRequestPronominal = this.handleRequestPronominal.bind(this);
        this.handleRequestPronominalEn = this.handleRequestPronominalEn.bind(this);
        this.handleRequestPassif = this.handleRequestPassif.bind(this);
        this.handleRequestAuxiEtre = this.handleRequestAuxiEtre.bind(this);
        this.handleRequestAuxiAvoir = this.handleRequestAuxiAvoir.bind(this);
        this.handleRequestForme2 = this.handleRequestForme2.bind(this);

      }

      generateParametre(param) {
        let parametre = "";
        if (param.feminin) parametre+="F";
        if (param.question) parametre+="Q";
        if (param.negation) parametre+="N";
        if (param.pronominal) parametre+="P";
        if (param.pronominalEn) parametre+="K";
        if (param.passif) parametre+="S";
        if (param.auxiEtre) parametre+="E";
        if (param.auxiAvoir) parametre+="A";
        if (param.auxiAvoir) parametre+="A";        
        if (param.forme2) parametre+="2";        
        return parametre;
      } 

      /***** button parameter click *****/
      handleRequestMasculin(masculin) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.feminin=masculin;
        this.loadVerbe(vb,this.generateParametre(param));    
      }

      handleRequestFeminin(feminin) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.feminin=feminin;
        this.loadVerbe(vb,this.generateParametre(param));    
      }

      handleRequestQuestion(question) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.question=question;
        this.loadVerbe(vb,this.generateParametre(param));    
      }      

      handleRequestNegation(negation) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.negation=negation;
        this.loadVerbe(vb,this.generateParametre(param));    
      }      

      handleRequestPronominal(pronominal) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.pronominal=pronominal;
        this.loadVerbe(vb,this.generateParametre(param));    
      }        

      handleRequestPronominalEn(pronominalEn) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.pronominalEn=pronominalEn;
        this.loadVerbe(vb,this.generateParametre(param));    
      }        

      handleRequestPassif(passif) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.passif=passif;
        this.loadVerbe(vb,this.generateParametre(param));    
      }        

      handleRequestAuxiEtre(auxiEtre) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.auxiEtre=auxiEtre;
        param.auxiAvoir=!auxiEtre;
        this.loadVerbe(vb,this.generateParametre(param));    
      }        

      handleRequestAuxiAvoir(auxiAvoir) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.auxiAvoir=auxiAvoir;
        param.auxiEtre=!auxiAvoir;
        this.loadVerbe(vb,this.generateParametre(param));    
      }  
      
      handleRequestForme2(forme2) {
        const vb = this.state.vbConjug.parametre.originalVerbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.forme2=forme2;
        this.loadVerbe(vb,this.generateParametre(param));    
      }      
      

      /***** other events *******/
      /* when typing text in the input */
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      /* check if typing enter */
      handleKeyDown(event) {
        const key=event.code;
        if (key === "Enter") {
          this.handleClick(event);
        } else if (key === "Escape") {
          this.setState({value: ""});
        }
      }      
    
      /* when click on conjuguer button */
      handleClick(e) {
        e.preventDefault();
        const vb = this.state.value;
        const param = this.state.param;
        this.loadVerbe(vb,param);
        this.inputVerbe.focus();
        this.setState({value: ""});
      };  
      
      /* when clicking on a proposal verb or a nuage verb */
      handleVerbePropose(vb) {
        this.setState({value: ""});
        this.loadVerbe(vb,this.state.param);
      }

      /* delete verbe history */
      handleResetVerbeHistory() {
        conjAPI.resetHistoryVerbe();
        this.setState({historyVerbe: []});
      }

      /* start to load a new verb and update the screen */
      loadVerbe(vb,param) {
        /* nothing if verb is empty */
        if (vb==="") return;
        /* check clear cache */
        if (vb==="/clear") {
          conjAPI.clearCache();          
          return;
        }
        /* load the verb */
        this.setState({
            loading: true
        }, () => {
            conjAPI.getVerbeInfo(vb,param)
            .then(info => {
              this.setState({loading: false});
              this.setState({vbConjug: info});
              const history = conjAPI.getHistoryVerbe();
              this.setState({historyVerbe: history})
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
        return (
            <React.Fragment>
            <div className="row py-2">
              <section className="col-12 col-md-8 col-lg-9">              
              <div className="input-group mb-3 mx-auto">
                <span className="input-group-text" id="basic-addon1">
                  {iconList.iconLoupe}
                </span>              
                <input ref={(input) => { this.inputVerbe = input; }} 
                  autoFocus 
                  name='inputVerbe' 
                  className="conjug" 
                  type="text"
                  placeholder={conjText.vbAConjuguer} 
                  value={this.state.value} 
                  onKeyDown={this.handleKeyDown} 
                  onChange={this.handleChange} />
                <button 
                  className='btn btn-outline-secondary conjugBtn' 
                  onClick={this.handleClick} 
                  value={this.state.value}>
                    {conjText.btnConjuguer}
                </button>
              </div>
                <ButtonList 
                  vbConjug={this.state.vbConjug}
                  onRequestMasculin={this.handleRequestMasculin}
                  onRequestFeminin={this.handleRequestFeminin}
                  onRequestQuestion={this.handleRequestQuestion}
                  onRequestNegation={this.handleRequestNegation}
                  onRequestPronominal={this.handleRequestPronominal}
                  onRequestPronominalEn={this.handleRequestPronominalEn}
                  onRequestPassif={this.handleRequestPassif}
                  onRequestAuxiEtre={this.handleRequestAuxiEtre}
                  onRequestAuxiAvoir={this.handleRequestAuxiAvoir}
                  onRequestForme2={this.handleRequestForme2}
                />
                <ProposeConjTypo
                  typoVerbe={this.state.value}
                  onVerbeChange={this.handleVerbePropose} />
                <ProposeVerbe 
                  propose={this.state.vbConjug.caracteristique.propose}  
                  originalVerbe={this.state.vbConjug.parametre.originalVerbe}
                  existe={this.state.vbConjug.caracteristique.existe} 
                  onVerbeChange={this.handleVerbePropose} />
                <ConjugaisonVerbe vbConjug={this.state.vbConjug} />
              </section>
              <aside className="col-12 col-md-4 col-lg-3 bg-light">
                <HistoryVerbeReact
                  onVerbeChange={this.handleVerbePropose}
                  onResetVerbeHistory={this.handleResetVerbeHistory}
                  historyValue={this.state.historyVerbe}  />
                <NuageVerbeReact 
                  onVerbeChange={this.handleVerbePropose}
                  nuageValue={this.state.nuageValue}  />
                <LogicielBox />
              </aside>
            </div>
          </React.Fragment>
        );
      }
}






export default VerbeInput;
import React from 'react';
import './VerbeInput.css'
import { conjAPI, nuage } from '..';
import ConjugaisonVerbe from './conjugaison/ConjugaisonVerbe';
import ProposeVerbe from './conjugaison/ProposeVerbe';
import NuageVerbeReact from './nuage/NuageVerbeReact';
import HistoryVerbeReact from './nuage/HistoryVerbeReact';
import { defaultVbConjug } from '../features/DefaultVbConj';
import { conjText } from '../features/ConjIcon';
import ButtonList from './bouton/ButtonList';






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
        this.handleRequestFeminin = this.handleRequestFeminin.bind(this);
        this.handleRequestQuestion = this.handleRequestQuestion.bind(this);
        this.handleRequestNegation = this.handleRequestNegation.bind(this);

      }

      generateParam() {
        let parametre="";
        if (this.state.requestFeminin)
          parametre+="F";
        this.setState({param: parametre});
        console.log(this.state);
      }

      generateParametre(param) {
        let parametre = "";
        if (param.feminin) parametre+="F";
        if (param.question) parametre+="Q";
        if (param.negation) parametre+="N";
        if (param.pronominal) parametre+="P";
        return parametre;
      } 

      /***** button parameter click *****/
      handleRequestFeminin(feminin) {
        const vb = this.state.vbConjug.verbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.feminin=feminin;
        this.loadVerbe(vb,this.generateParametre(param));    
      }

      handleRequestQuestion(question) {
        const vb = this.state.vbConjug.verbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.question=question;
        this.loadVerbe(vb,this.generateParametre(param));    
      }      

      handleRequestNegation(negation) {
        const vb = this.state.vbConjug.verbe;
        let param = Object.assign({}, this.state.vbConjug.parametre);
        param.negation=negation;
        this.loadVerbe(vb,this.generateParametre(param));    
      }      

      /***** other events *******/
      /* when typing text in the input */
      handleChange(event) {
        this.setState({value: event.target.value});
        this.generateParam();
        const vb = this.state.value;
        const param = this.state.param;
        this.loadVerbe(vb,param);
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
      };  
      
      /* when clicking on a proposal verb or a nuage verb */
      handleVerbePropose(vb) {
        this.setState({value: vb});
        this.loadVerbe(vb,this.state.param);
      }

      /* delete verbe history */
      handleResetVerbeHistory() {
        conjAPI.resetHistoryVerbe();
        this.setState({historyVerbe: []});
      }

      /* start to load a new verb and update the screen */
      loadVerbe(vb,param) {
        if (vb==="") return;
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
                  <i className="fa-duotone fa-magnifying-glass fa-2x"></i>
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
                  className='btn btn-outline-secondary' 
                  onClick={this.handleClick} 
                  value={this.state.value}>
                    {conjText.btnConjuguer}
                </button>
              </div>
                <ButtonList 
                  vbConjug={this.state.vbConjug}
                  onRequestFeminin={this.handleRequestFeminin}
                  onRequestQuestion={this.handleRequestQuestion}
                  onRequestNegation={this.handleRequestNegation}
                />
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
              </aside>
            </div>
          </React.Fragment>
        );
      }
}






export default VerbeInput;
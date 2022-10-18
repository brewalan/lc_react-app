import React from 'react';
import './VerbeInput.css'
import { conjAPI, nuage } from '..';
import ConjugaisonVerbe from './conjugaison/ConjugaisonVerbe';
import ProposeVerbe from './conjugaison/ProposeVerbe';
import NuageVerbeReact from './nuage/NuageVerbeReact';
import HistoryVerbeReact from './nuage/HistoryVerbeReact';
import { defaultVbConjug } from '../features/DefaultVbConj';
import { conjText, iconList } from '../features/ConjIcon';






/* Class to control the input of a verb */
class VerbeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          value: '',
          vbConjug: defaultVbConjug,
          nuageValue: nuage,
          historyVerbe: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleVerbePropose = this.handleVerbePropose.bind(this);
        this.handleResetVerbeHistory = this.handleResetVerbeHistory.bind(this);
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

      /* delete verbe history */
      handleResetVerbeHistory() {
        conjAPI.resetHistoryVerbe();
        this.setState({historyVerbe: []});
      }

      /* start to load a new verb and update the screen */
      loadVerbe(vb) {
        if (vb==="") return;
        this.setState({
            loading: true
        }, () => {
            conjAPI.getVerbeInfo(vb)
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
     

      /* create the different button */
      renderButtonList() {
        return (
            <React.Fragment>
              <div className="btn-group" role="group">
                <input type="radio" cmass="btn-check" name="btnradio" id="btnMasculin" autocomplete="off" checked />
                <label className="btn btn-outline-primary" for="btnMasculin">
                  {iconList.iconMasculin}
                </label>  

                <input type="radio" cmass="btn-check" name="btnradio" id="btnFeminin" autocomplete="off" />
                <label className="btn btn-outline-primary" for="btnFeminin">
                  {iconList.iconFeminin}
                </label>  

              </div>
            </React.Fragment>     
        );
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
              <section className="col-12 col-md-8">              
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
                  onChange={this.handleChange} />
                <button 
                  className='btn btn-outline-secondary' 
                  onClick={this.handleClick} 
                  value={this.state.value}>
                    {conjText.btnConjuguer}
                </button>
              </div>
              <div>
                {this.renderButtonList}
              </div>
                <ProposeVerbe 
                  propose={this.state.vbConjug.caracteristique.propose}  
                  originalVerbe={this.state.vbConjug.parametre.originalVerbe}
                  existe={this.state.vbConjug.caracteristique.existe} 
                  onVerbeChange={this.handleVerbePropose} />
                <ConjugaisonVerbe vbConjug={this.state.vbConjug} />
              </section>
              <aside className="col-12 col-md-4 bg-light">
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
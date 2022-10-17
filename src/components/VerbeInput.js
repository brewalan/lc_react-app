import React from 'react';
import './VerbeInput.css'
import { conjAPI, nuage } from '..';
import ConjugaisonVerbe from './conjugaison/ConjugaisonVerbe';
import ProposeVerbe from './conjugaison/ProposeVerbe';
import NuageVerbeReact from './nuage/NuageVerbeReact';
import { defaultVbConjug } from '../features/DefaultVbConj';






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
            conjAPI.getVerbeInfo(vb)
            .then(info => {
              this.setState({loading: false});
              this.setState({vbConjug: info});
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
                <button>
                  <i className="fa-duotone fa-mars fa-2x"></i>
                </button>
                <button>
                  <i className="fa-duotone fa-venus fa-2x"></i>
                </button>
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
import React from 'react';
import { conjText } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for auxiliaire choice */
class ButtonAvoirEtre extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestAuxiEtre = this.handleRequestAuxiEtre.bind(this);
        this.handleRequestAuxiAvoir = this.handleRequestAuxiAvoir.bind(this);
    }

    handleRequestAuxiEtre(event) {
        this.props.onRequestAuxiEtre((!this.props.vbConjug.parametre.auxiEtre));
    }

    handleRequestAuxiAvoir(event) {
        this.props.onRequestAuxiAvoir((!this.props.vbConjug.parametre.auxiAvoir));
    }



    render() {
        const info = this.props.vbConjug;
        if (info.caracteristique.autoriseAuxiEtre) {      
          return (
            <React.Fragment>
            <div className="px-2 btn-group" 
              role="group" 
              aria-label="Auxiliaire"
              >
              <input type="radio" 
                className="btn-check" 
                name="btnRadioAuxiEtre" 
                id="btnradio11" 
                autoComplete="off" 
                value="masculin"
                disabled={!info.caracteristique.autoriseAuxiEtre}                 
                checked={info.parametre.auxiAvoir}
                title={conjText.toolTipAuxiAvoir}    
                onChange = {this.handleRequestAuxiAvoir}
                />
              <label className="btn btn-outline-primary"
                htmlFor="btnradio11">
                  {conjText.auxiAvoir}
              </label>

              <input type="radio" 
                className="btn-check" 
                name="btnRadioAuxiAvoir" 
                id="btnradio22" 
                autoComplete="off" 
                value="feminin"
                disabled={!info.caracteristique.autoriseAuxiEtre}
                checked={info.parametre.auxiEtre}
                title={conjText.toolTipAuxiEtre}    
                onChange = {this.handleRequestAuxiEtre}
                />
              <label className="btn btn-outline-primary" 
                htmlFor="btnradio22">
                  {conjText.auxiEtre}
              </label>
            </div>
            </React.Fragment>  
        );
    }
    }
}

export default ButtonAvoirEtre;

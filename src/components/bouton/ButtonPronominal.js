import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for pronominal form */
class ButtonPronominal extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestPronominal = this.handleRequestPronominal.bind(this);
    }

    handleRequestPronominal(event) {
        this.props.onRequestPronominal((!this.props.vbConjug.parametre.pronominal));
      }


    render() {
        const info = this.props.vbConjug;
  
        if (info.caracteristique.autorisePronominal) {      
          return (
            <React.Fragment>
              <button type="button" 
                className='btn btn-warning {info.parametre.pronominal ? "active" : ""}'
                data-bs-toggle="button tooltip"
                aria-pressed={info.parametre.pronominal}
                autoComplete="off"
                data-bs-placement="top" 
                title={conjText.toolTipPronominal}    
                disabled={!info.caracteristique.autorisePronominal}             
                onClick = {this.handleRequestPronominal}
                >
                  {info.parametre.pronominal ? iconList.icoPronominalActive : iconList.icoPronominal}
              </button>
            </React.Fragment>  
        );
    }
    }
}

export default ButtonPronominal;

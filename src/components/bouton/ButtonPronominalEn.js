import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for pronominal form */
class ButtonPronominalEn extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestPronominalEn = this.handleRequestPronominalEn.bind(this);
    }

    handleRequestPronominalEn(event) {
      this.props.onRequestPronominalEn((!this.props.vbConjug.parametre.pronominalEn));
    }


    render() {
        const info = this.props.vbConjug;
  
        if (info.caracteristique.autorisePronominalEn) {      
          return (
            <React.Fragment>
              <button type="button" 
                className='btn btn-warning {info.parametre.pronominalEn ? "active" : ""}'
                data-bs-toggle="button tooltip"
                aria-pressed={info.parametre.pronominalEn}
                autoComplete="off"
                data-bs-placement="top" 
                title={conjText.toolTipPronominalEn}    
                disabled={!info.caracteristique.autorisePronominalEn}             
                onClick = {this.handleRequestPronominalEn}
                >
                  {info.parametre.pronominalEn ? iconList.icoPronominalEnActive : iconList.icoPronominalEn}
              </button>
            </React.Fragment>  
        );
    }
    }
}

export default ButtonPronominalEn;

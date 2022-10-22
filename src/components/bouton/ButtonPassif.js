import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for passif */
class ButtonPassif extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestPassif = this.handleRequestPassif.bind(this);
    }

    handleRequestPassif(event) {
        this.props.onRequestPassif((!this.props.vbConjug.parametre.passif));
      }


    render() {
        const info = this.props.vbConjug;
  
        if (info.caracteristique.autorisePassif) {      
          return (
            <React.Fragment>
              <button type="button" 
                className='btn btn-info {info.parametre.passif ? "active" : ""}'
                data-bs-toggle="button"
                aria-pressed={info.parametre.passif}
                autoComplete="off"
                onClick = {this.handleRequestPassif}
                disabled={!info.caracteristique.autorisePassif}             
                title={conjText.toolTipPassif}    
                >
                  {info.parametre.passif ? iconList.icoPassifActive : iconList.icoPassif}
              </button>
            </React.Fragment>  
        );
    }
    }
}

export default ButtonPassif;

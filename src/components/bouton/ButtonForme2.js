import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for printing and rtf */
class ButtonForme2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestForme2 = this.handleRequestForme2.bind(this);
    }

    handleRequestForme2(event) {
        this.props.onRequestForme2((!this.props.vbConjug.parametre.forme2));
      }


    render() {
        const info = this.props.vbConjug;
  
        if (info.caracteristique.autoriseForme2) {      
          return (
            <React.Fragment>
              <button type="button" 
                className='btn btn-info'
                title={conjText.toolTipForme2}    
                onClick = {this.handleRequestForme2}
                disabled={!info.caracteristique.autoriseForme2}             
                >
                  {info.parametre.forme2 ? iconList.iconForme1 : iconList.iconForme2}
              </button>
            </React.Fragment>  
        );
    }
    }
}

export default ButtonForme2;
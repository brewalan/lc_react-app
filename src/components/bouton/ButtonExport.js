import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for printing and rtf */
class ButtonExport extends React.Component {

    render() {
        const info = this.props.vbConjug;
        const printURL = "https://leconjugueur.lefigaro.fr/php5/index.php?t=I&v="+info.parametre.originalVerbe+"&p="+info.parametre.param;
        const rtfURL = "https://leconjugueur.lefigaro.fr/php5/index.php?t=W&v="+info.parametre.originalVerbe+"&p="+info.parametre.param;
  
        if (info.caracteristique.existe) {      
          return (
            <React.Fragment>
              <a className='btn btn-outline-dark' 
                title={conjText.toolTipPrint} 
                href={printURL} target="_">
                  {iconList.iconPrint}
              </a>
              <a className='btn btn-outline-dark' 
                title={conjText.toolTipWord} 
                href={rtfURL} target="_">
                  {iconList.iconWord}
              </a>                
            </React.Fragment>  
        );
    }
    }
}

export default ButtonExport;  
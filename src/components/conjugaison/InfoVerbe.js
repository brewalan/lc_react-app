import React from 'react';
import { conjText,iconList } from '../../features/ConjIcon';

/* display a mode */
class InfoVerbe extends React.Component {
    render() {
        /* constitution du groupe */
        const groupe = this.props.info.caracteristique.groupe;
        let groupText, iconGroup;
        switch (groupe) {
            case 0:
                groupText = conjText.groupe0;
                iconGroup = iconList.iconGroupe0;
                break;
            case 1:
                groupText = conjText.groupe1;
                iconGroup = iconList.iconGroupe1;
                break;
            case 2:
                groupText = conjText.groupe2;
                iconGroup = iconList.iconGroupe2;
                break;
            case 3:
                groupText = conjText.groupe3;
                iconGroup = iconList.iconGroupe3;
                break;
            case 4:
                groupText = conjText.groupe4;
                iconGroup = iconList.iconGroupe4;
                break;
            default:
                ;
        }
        /* information de l'auxiliaire */
        let infoAuxiliaire;
        switch (this.props.info.caracteristique.auxiliaire) {
            case 0:
                infoAuxiliaire = conjText.infoAuxiliaireAvoir;
                break;
            case 1:
                infoAuxiliaire = conjText.infoAuxiliaireEtre;
                break;
            case 2:
                infoAuxiliaire = conjText.infoAuxiliaireAvoirEtre;
                break;
            default:
                ;
            }
        /* affiche les infos de conjugaison */
        const defaultInfo = " - Paramètres : ";
        let vbInfo = defaultInfo;
        vbInfo+=(this.props.info.parametre.feminin) ? conjText.toolTipFeminin+" - " : "";
        vbInfo+=(this.props.info.parametre.pronominal) ? conjText.toolTipPronominal+" - " : "";
        vbInfo+=(this.props.info.parametre.question) ? conjText.toolTipQuestion+" - " : "";
        vbInfo+=(this.props.info.parametre.negation) ? conjText.toolTipNegation+" - " : "";
        vbInfo+=(this.props.info.parametre.auxiEtre) ? conjText.toolTipAuxiEtre+" - " : "";
        vbInfo+=(this.props.info.parametre.auxiAvoir) ? conjText.toolTipAuxiAvoir+" - " : "";
        vbInfo+=(this.props.info.parametre.passif) ? conjText.toolTipPassif+" - " : "";
        vbInfo+=(this.props.info.parametre.forme2) ? conjText.toolTipForme2+" - " : "";        
        vbInfo = (vbInfo === defaultInfo) ? "" : vbInfo.slice(0,-3);
        
      return (
        <React.Fragment>
            <div className="pb-2 hstack gap-2">
                <div>
                    <p className="ConjBox">
                        {groupText} {vbInfo}<br />
                        {infoAuxiliaire}<br />                        
                    </p>
                </div>
                <div className='ms-auto'>
                    {iconGroup}
                </div>
            </div>
        </React.Fragment>
      );
    }
  }

export default InfoVerbe;  
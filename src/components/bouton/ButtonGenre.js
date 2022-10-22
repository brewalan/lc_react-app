import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for gender choice */
class ButtonGenre extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestMasculin = this.handleRequestMasculin.bind(this);
        this.handleRequestFeminin = this.handleRequestFeminin.bind(this);
    }

    handleRequestMasculin(event) {
        this.props.onRequestMasculin(false);
    }

    handleRequestFeminin(event) {
        this.props.onRequestFeminin(true);
    }



    render() {
        const info = this.props.vbConjug;
        return (
        <React.Fragment>
            <div className="btn-group" 
            role="group" 
            aria-label="Choix du genre"
            >
            <input type="radio" 
                className="btn-check" 
                name="btnRadioGenreMasculin" 
                id="btnradio1" 
                autoComplete="off" 
                value="masculin"
                disabled={!info.caracteristique.autoriseFeminin}                 
                checked={!info.parametre.feminin}
                title={conjText.toolTipMasculin}    
                onChange = {this.handleRequestMasculin}
                />
            <label className="btn btn-outline-primary"
                htmlFor="btnradio1">
                {iconList.iconMasculin}
            </label>

            <input type="radio" 
                className="btn-check" 
                name="btnRadioGenreFeminin" 
                id="btnradio2" 
                autoComplete="off" 
                value="feminin"
                disabled={!info.caracteristique.autoriseFeminin}
                checked={info.parametre.feminin}
                title={conjText.toolTipFeminin}    
                onChange = {this.handleRequestFeminin}
                />
            <label className="btn btn-outline-primary" 
                htmlFor="btnradio2">
                {iconList.iconFeminin}
            </label>
            </div>
        </React.Fragment>  
    );
    }
}

export default ButtonGenre;

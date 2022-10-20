import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage the button list */
class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestFeminin = this.handleRequestFeminin.bind(this);
        this.handleRequestQuestion = this.handleRequestQuestion.bind(this);
        this.handleRequestNegation = this.handleRequestNegation.bind(this);
        this.handleRequestPronominal = this.handleRequestPronominal.bind(this);
        this.handleRequestPronominalEn = this.handleRequestPronominalEn.bind(this);
        this.handleRequestPassif = this.handleRequestPassif.bind(this);
        this.handleRequestAuxiEtre = this.handleRequestAuxiEtre.bind(this);
        this.handleRequestAuxiAvoir = this.handleRequestAuxiAvoir.bind(this);
        this.handleRequestForme2 = this.handleRequestForme2.bind(this);
      }
    
      handleRequestFeminin(event) {
        this.props.onRequestFeminin((event.target.value==="feminin"));
      }

      handleRequestQuestion(event) {
        this.props.onRequestQuestion((!this.props.vbConjug.parametre.question));
      }

      handleRequestNegation(event) {
        this.props.onRequestNegation((!this.props.vbConjug.parametre.negation));
      }

      handleRequestPronominal(event) {
        this.props.onRequestPronominal((!this.props.vbConjug.parametre.pronominal));
      }

      handleRequestPronominalEn(event) {
        this.props.onRequestPronominalEn((!this.props.vbConjug.parametre.pronominalEn));
      }

      handleRequestPassif(event) {
        this.props.onRequestPassif((!this.props.vbConjug.parametre.passif));
      }

      handleRequestAuxiEtre(event) {
        this.props.onRequestAuxiEtre((!this.props.vbConjug.parametre.auxiEtre));
      }

      handleRequestAuxiAvoir(event) {
        this.props.onRequestAuxiAvoir((!this.props.vbConjug.parametre.auxiAvoir));
      }
      handleRequestForme2(event) {
        this.props.onRequestForme2((!this.props.vbConjug.parametre.forme2));
      }

    render() {
      const info = this.props.vbConjug;
      const printURL = "https://leconjugueur.lefigaro.fr/php5/index.php?t=I&v="+info.parametre.originalVerbe+"&p="+info.parametre.param;
      const rtfURL = "https://leconjugueur.lefigaro.fr/php5/index.php?t=W&v="+info.parametre.originalVerbe+"&p="+info.parametre.param;

      if (info.caracteristique.existe) {      
        return (
          <React.Fragment>
            <div className="pb-2 hstack gap-3">


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
                onChange = {this.handleRequestFeminin}
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

            <button type="button" 
                className='btn btn-info'
                title={conjText.toolTipForme2}    
                onClick = {this.handleRequestForme2}
                disabled={!info.caracteristique.autoriseForme2}             
                >
                  {info.parametre.forme2 ? iconList.iconForme1 : iconList.iconForme2}
              </button>


            
            <div className='vr'></div>

            <div className="pl-2">
              <button type="button" 
                className='btn btn-info {info.parametre.question ? "active" : ""}'
                data-bs-toggle="button"
                aria-pressed={info.parametre.question}
                autoComplete="off"
                title={conjText.toolTipQuestion}    
                onClick = {this.handleRequestQuestion}
                >
                  {info.parametre.question ? iconList.icoQuestionActive : iconList.icoQuestion}
              </button>

              <button type="button" 
                className='btn btn-danger {info.parametre.negation ? "active" : ""}'
                data-bs-toggle="button"
                aria-pressed={info.parametre.negation}
                autoComplete="off"
                title={conjText.toolTipNegation}    
                onClick = {this.handleRequestNegation}
                >
                  {info.parametre.negation ? iconList.icoNegationActive : iconList.icoNegation}
              </button>
            </div>

            <div className='vr'></div>

            <div className="">
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
            </div>    
            <div>
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
            </div>                    




            <div className='vr'></div>

            <div className="btn-group" 
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



            <div className='ms-auto'>

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



            </div>
            
          </div>
          </React.Fragment>       
        );
      }
    }
  }

export default ButtonList;  
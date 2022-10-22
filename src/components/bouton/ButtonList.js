import React from 'react';
import ButtonExport from './ButtonExport';
import ButtonForme2 from './ButtonForme2';
import ButtonQuestionbNegation from './ButtonQuestionNegation';
import ButtonPronominal from './ButtonPronominal';
import ButtonPronominalEn from './ButtonPronominalEn';
import ButtonPassif from './ButtonPassif';
import ButtonAvoirEtre from './ButtonAvoirEtre';
import ButtonGenre from './ButtonGenre';
import './ButtonList.css'


/* manage the button list */
class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestMasculin = this.handleRequestMasculin.bind(this);
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
    
      handleRequestMasculin(event) {
        this.props.onRequestMasculin(false);
      }

      handleRequestFeminin(event) {
        this.props.onRequestFeminin(true);
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

      if (info.caracteristique.existe) {      
        return (
          <React.Fragment>
            <div className="pb-2 hstack gap-2">

              <ButtonGenre
                vbConjug={info}
                onRequestMasculin={this.handleRequestMasculin}
                onRequestFeminin={this.handleRequestFeminin} />
          
              <div className='vr'></div>

              <div className="pl-2">
                <ButtonQuestionbNegation
                  vbConjug={info} 
                  onRequestQuestion={this.handleRequestQuestion}
                  onRequestNegation={this.handleRequestNegation} />
                <ButtonForme2 
                    vbConjug={info} 
                    onRequestForme2={this.handleRequestForme2} />

                <ButtonPronominal
                  vbConjug={info} 
                  onRequestPronominal={this.handleRequestPronominal} />

                <ButtonPronominalEn
                  vbConjug={info} 
                  onRequestPronominalEn={this.handleRequestPronominalEn} />

                <ButtonPassif
                  vbConjug={info} 
                  onRequestPassif={this.handleRequestPassif} />

                <ButtonAvoirEtre
                  vbConjug={info}
                  onRequestAuxiEtre={this.handleRequestAuxiEtre}
                  onRequestAuxiAvoir={this.handleRequestAuxiAvoir} />

              </div>                    

              <div className='ms-auto'>
                <ButtonExport vbConjug={info} />
              </div>
            
            </div>
          </React.Fragment>       
        );
      }
    }
  }

export default ButtonList;  
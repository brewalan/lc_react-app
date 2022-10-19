import React from 'react';
import { iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage the button list */
class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestFeminin = this.handleRequestFeminin.bind(this);
        this.handleRequestQuestion = this.handleRequestQuestion.bind(this);
        this.handleRequestNegation = this.handleRequestNegation.bind(this);
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

    render() {
      const info = this.props.vbConjug;
      if (info.caracteristique.existe) {      
        return (
          <React.Fragment>
            <div className="pb-2">


            <div className="btn-group" 
              role="group" 
              aria-label="Choix du genre"
              >
              <input type="radio" 
                className="btn-check" 
                name="btnRadioGenre" 
                id="btnradio1" 
                autoComplete="off" 
                value="masculin"
                disabled={!info.caracteristique.autoriseFeminin}                 
                checked={!info.parametre.feminin}
                onChange = {this.handleRequestFeminin}
                />
              <label className="btn btn-outline-primary"
                htmlFor="btnradio1">
                  {iconList.iconMasculin}
              </label>

              <input type="radio" 
                className="btn-check" 
                name="btnRadioGenre" 
                id="btnradio2" 
                autoComplete="off" 
                value="feminin"
                disabled={!info.caracteristique.autoriseFeminin}
                checked={info.parametre.feminin}
                onChange = {this.handleRequestFeminin}
                />
              <label className="btn btn-outline-primary" 
                htmlFor="btnradio2">
                  {iconList.iconFeminin}
              </label>

              <button type="button" 
                className='btn btn-info {info.parametre.question ? "active" : ""}'
                data-bs-toggle="button"
                aria-pressed={info.parametre.question}
                autoComplete="off"
                onClick = {this.handleRequestQuestion}
                >
                  {info.parametre.question ? iconList.icoQuestionActive : iconList.icoQuestion}
              </button>

              <button type="button" 
                className='btn btn-danger {info.parametre.negation ? "active" : ""}'
                data-bs-toggle="button"
                aria-pressed={info.parametre.negation}
                autoComplete="off"
                onClick = {this.handleRequestNegation}
                >
                  {info.parametre.negation ? iconList.icoNegationActive : iconList.icoNegation}
              </button>


            </div>
            
          </div>
          </React.Fragment>       
        );
      }
    }
  }

export default ButtonList;  
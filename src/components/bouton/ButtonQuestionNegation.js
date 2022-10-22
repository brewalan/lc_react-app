import React from 'react';
import { conjText, iconList } from '../../features/ConjIcon';
import './ButtonList.css'


/* manage specific button for printing and rtf */
class ButtonQuestionbNegation extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestQuestion = this.handleRequestQuestion.bind(this);
        this.handleRequestNegation = this.handleRequestNegation.bind(this);
    }

    handleRequestQuestion(event) {
        this.props.onRequestQuestion((!this.props.vbConjug.parametre.question));
    }

    handleRequestNegation(event) {
        this.props.onRequestNegation((!this.props.vbConjug.parametre.negation));
    }


    render() {
        const info = this.props.vbConjug;
  
        return (
            <React.Fragment>
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
            </React.Fragment>  
        );
    }
}

export default ButtonQuestionbNegation;
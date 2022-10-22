import React from 'react';
import { stripTags } from '../../utils/stripTags';
import Parser from 'html-react-parser'
import './ConjugaisonBox.css';

/* update the conjugaison with the tense box */
class ConjugaisonSmallBox extends React.Component {
    render() {
      return (
        <div className='col-md-6 col-12'>
          <h5 className='ConjBox'>{this.props.temps}</h5>
          <p className='ConjBox'>{Parser(stripTags(this.props.conjugaison,'<b></b><br>'))}</p>
        </div>
      );
    }
  }




  export default ConjugaisonSmallBox;  
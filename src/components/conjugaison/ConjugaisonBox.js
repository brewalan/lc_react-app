import React from 'react';
import { stripTags } from '../../utils/stripTags';
import Parser from 'html-react-parser'


/* update the conjugaison with the tense box */
class ConjugaisonBox extends React.Component {
    render() {
      return (
        <div className='col-md-3 col-sm-6'>
          <h5>{this.props.temps}</h5>
          <p>{Parser(stripTags(this.props.conjugaison,'<b></b><br>'))}</p>
        </div>
      );
    }
  }




  export default ConjugaisonBox;  
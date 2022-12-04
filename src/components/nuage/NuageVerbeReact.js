import React from 'react';
import ModeBox from '../conjugaison/ModeBox';
import './NuageVerbeReact.css'
import { conjText } from '../../features/ConjIcon';

 

class NuageVerbeReact extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onVerbeChange(e.target.value);
  }

  /* display nuage tag */
  render() {
    const listVerbeNuage = this.props.nuageValue.map((element) => {
      const btnClass = 'btn-nuage '+element.taille;
      return (
        <span key={element.verbe}>
          <button         
            className={btnClass} 
            value={element.verbe}
            onClick={this.handleClick}>
              {element.verbe}
          </button>{element.separateur}
        </span>   
      )}
    );

    /* check if display */
    if (this.props.nuageDisplay) {
      return (
        <React.Fragment>
          <ModeBox mode={conjText.nuageDeVerbe} />
          <div className="text-center pb-2">
            {listVerbeNuage}
          </div>
        </React.Fragment>
      );
    }
  }
}



export default NuageVerbeReact;
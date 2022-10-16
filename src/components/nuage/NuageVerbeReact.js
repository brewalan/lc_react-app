import React from 'react';
import { nuage } from '../..';
import './NuageVerbeReact.css'
import VerbeDuNuage from './VerbeDuNuage';

 

class NuageVerbeReact extends React.Component {

  constructor() {
    super();
    this.state = {nuageValue: nuage};
  }

  render() {
    const listVerbe = this.state.nuageValue.map((element) =>
      <VerbeDuNuage key={element.verbe} verbe={element.verbe} taille={element.taille} separateur={element.separateur} />
    );
    return (
      <div className="text-center pb-2">
        {listVerbe}
      </div>
    );
  }
}



export default NuageVerbeReact;
import React from 'react';
import './PropositionVerbe.css';

/* display a mode */
class ProposeVerbe extends React.Component {

//    {listPropose}


/*const listPropose = this.state.vbConjug.caracteristique.propose.map((element) =>
/*<VerbeDuNuage key={element.verbe} verbe={element.verbe} taille={element.taille} separateur={element.separateur} />*/
//console.log(element)
//);
      render() { 
        if (!this.props.existe) {
            return (
                <React.StrictMode>
                <div className='alert alert-warning' role='alert'>
                    <h3>Le verbe {this.props.originalVerbe} n'a pas été trouvé.</h3>
                    <p>Voici une proposition de verbes :</p>
                    <ul>
                    <li><button className='bg-alert-warning btn-primary-outline' onClick={(e)=>this.handleClick(e,'aimer')}>aimer</button></li>
                    <li><button onClick={(e)=>this.props.handleClick(e,'regarder')}>regarder</button></li>
                    </ul>
                </div>
                </React.StrictMode>
            );
        }
    }
}

export default ProposeVerbe;        
import React from 'react';
import './PropositionVerbe.css';

/* display a mode */
class ProposeVerbe extends React.Component {

//    

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onVerbeChange(e.target.value);
      }

      render() { 
        if (!this.props.existe) {
            const listPropose = this.props.propose.map((element) =>
                <li key={element}>
                    <button 
                        className='btn-propose'
                        value={element}
                        onClick={this.handleClick}>
                            {element}
                    </button>
                </li>
            );

            return (
                <React.StrictMode>
                <div className='alert alert-warning' role='alert'>
                    <h3>Le verbe {this.props.originalVerbe} n'a pas été trouvé.</h3>
                    <p>Voici une proposition de verbes :</p>
                    <ul>
                        {listPropose}
                    </ul>
                </div>
                </React.StrictMode>
            );
        }
    }
}


/*
<li><button className='bg-alert-warning btn-primary-outline' onClick={(e)=>this.handleClick(e,'aimer')}>aimer</button></li>
<li><button onClick={(e)=>this.props.handleClick(e,'regarder')}>regarder</button></li>
*/


export default ProposeVerbe;        
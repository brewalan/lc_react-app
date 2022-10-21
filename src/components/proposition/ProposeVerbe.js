import React from 'react';
import './PropositionVerbe.css';
import { conjText } from '../../features/ConjIcon';

/* display a proposal for a verb */
class ProposeVerbe extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onVerbeChange(e.target.value);
      }

      render() { 
        /* only if verb exists, otherwise, blank */
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
            
            if (this.props.originalVerbe!=="") {
                return (
                    <React.StrictMode>
                    <div className='alert alert-warning' role='alert'>
                        <h3>{conjText.vbPropose1}{this.props.originalVerbe}{conjText.vbPropose2}</h3>
                        <p>{conjText.vbPropose3}</p>
                        <ul>
                            {listPropose}
                        </ul>
                    </div>
                    </React.StrictMode>
                );
            }
        }
    }
}


export default ProposeVerbe;        
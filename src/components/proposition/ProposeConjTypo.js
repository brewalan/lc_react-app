import React from 'react';
import { conjText } from '../../features/ConjIcon';
import { conjTypo } from '../..';

/* display a proposal for a verb */
class ProposeConjTypo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onVerbeChange(e.target.value);
      }

      render() { 
        /* only if there is a result */
        const typoVerbe = this.props.typoVerbe;
        const propose = conjTypo.getConjTypo(typoVerbe);
        let index = 0;

        if (propose.length>0) {
            const listPropose = propose.map((element) => {
                const total = propose.length; 
                const btnClass = 'btn-nuage';
                const varKey = 'conjTypo-'+index+'-'+element;
                let separator = ' | ';
                index++;
                if (index===total) {
                    separator = "";
                }

                return (
                    <span key={varKey}>
                        <button 
                            className={btnClass}
                            value={element}
                            onClick={this.handleClick}>
                                {element}
                        </button>{separator}
                    </span>
                );
            }
            );
            
            return (
                <React.StrictMode>
                <div className='alert alert-warning' role='alert'>
                    <h3>{conjText.proposeConjTypo}</h3>
                    <div>
                        {listPropose}
                    </div>
                </div>
                </React.StrictMode>
            );
        }
    }
}


export default ProposeConjTypo;        
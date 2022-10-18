import React from 'react';
import ModeBox from '../conjugaison/ModeBox';
import './NuageVerbeReact.css';
import { iconList } from '../../features/ConjIcon.js';
import { conjText } from '../../features/ConjIcon.js';


 

class HistoryVerbeReact extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleResetHistory = this.handleResetHistory.bind(this);
  }

  handleClick(e) {
    this.props.onVerbeChange(e.target.value);
  }

  handleResetHistory() {
    this.props.onResetVerbeHistory();
  }

  /* display the historical verbs */
  render() {
    if (this.props.historyValue.length===0) return;
    var index = 0;

    const total = this.props.historyValue.length; 
    const listVerbeHistory = this.props.historyValue.map((element) => {
    const btnClass = 'btn-nuage';
    const varKey = 'history-'+index+'-'+element;
    let separator = ' - ';
    index++;

    if (index===total) separator="";
      return (
        <span key={varKey}>
          <button         
            className={btnClass} 
            value={element}
            onClick={this.handleClick}>
              {element}
          </button>{separator}
        </span>   
      )}
    );

    return (
      <React.Fragment>
        <ModeBox mode={conjText.historique} />
        <div className="text-center pb-2 row align-items-center">
          <div className="col-8">
            {listVerbeHistory}
          </div>
          <div className="col-4">
            <button 
              type="button" 
              className="btn btn-outline-dark"
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title={conjText.toolTipTrashHistory}
              onClick={this.handleResetHistory}>
                {iconList.iconTrash}
            </button>            
          </div>
        </div>
      </React.Fragment>
    );
  }
}



export default HistoryVerbeReact;
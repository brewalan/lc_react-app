import React from 'react';
import ModeBox from '../conjugaison/ModeBox';
import './NuageVerbeReact.css'

 

class HistoryVerbeReact extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onVerbeChange(e.target.value);
  }

  /* display nuage tag */
  render() {
    if (this.props.historyValue.length==0) return ;
    var index = 0;
    const total = this.props.historyValue.length; 

    const listVerbeHistory = this.props.historyValue.map((element) => {
    const btnClass = 'btn-nuage';
    const varKey = 'history-'+element;
    let separator = ' - ';
    index++;
    console.log(index+"/"+total);
    if (index==total) separator="";
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
        <ModeBox mode='Historique' />
        <div className="text-center pb-2">
          {listVerbeHistory}
        </div>
      </React.Fragment>
    );
  }
}



export default HistoryVerbeReact;
import React from "react";

class VerbeDuNuage extends React.Component {
    render() {
      return (
        <span>
          <button className={this.props.taille} 
            onClick={() => console.log('{this.props.verbe}')}>
            {this.props.verbe}
          </button>{this.props.separateur}
        </span>
      );
    }
  }

export default VerbeDuNuage;  
import React from 'react';

/* display a mode */
class ModeBox extends React.Component {
    render() {
      return (
        <h2 className='ConjBox bg-primary text-white p-2'>{this.props.mode}</h2>
      );
    }
  }

export default ModeBox;  
import React from 'react';
import { conjText,iconList } from '../../features/ConjIcon';

/* display a mode */
class LogicielBox extends React.Component {
    render() {
      return (
        <React.Fragment>        
          <h2 className='ConjBox bg-primary text-white p-2'>
            {conjText.logiciel}
          </h2>
          <p className='ConjBox text-center'>{conjText.logicielTxt}</p>
          <div className='text-center'>
            <a className='m-2 btn btn-outline-secondary' href={conjText.logicielIOS}>{iconList.iconIOS}</a>
            <a className='m-2 btn btn-outline-success' href={conjText.logicielAndroid}>{iconList.iconAndroid}</a>
            <a className='m-2 btn btn-outline-secondary' href={conjText.logicielMac}>{iconList.iconMac}</a>
            <a className='m-2 btn btn-outline-primary' href={conjText.logicielWindows}>{iconList.iconWindows}</a>

          </div>
        </React.Fragment>        
      );
    }
  }

export default LogicielBox;  
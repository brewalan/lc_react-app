import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VerbeInput from './components/VerbeInput'
import reportWebVitals from './example/reportWebVitals';
import NuageVerbeGenerator from './features/NuageVerbeGenerator';

/* generate the verb cloud */
export const nuage = new NuageVerbeGenerator().getNuageVerbe();


const verbeInput = ReactDOM.createRoot(document.getElementById('verbeInput'));
/*const nuageVerbe = ReactDOM.createRoot(document.getElementById('nuageVerbe'));

nuageVerbe.render(
  <React.StrictMode>
    <NuageVerbeReact />
  </React.StrictMode>
);*/

verbeInput.render(
  <React.StrictMode>
    <VerbeInput />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

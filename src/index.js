import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NuageVerbe from './inc/NuageVerbe'
import VerbeInput from './inc/VerbeInput'
import reportWebVitals from './reportWebVitals';



const verbeInput = ReactDOM.createRoot(document.getElementById('verbeInput'));
const nuageVerbe = ReactDOM.createRoot(document.getElementById('nuageVerbe'));

nuageVerbe.render(
  <React.StrictMode>
    <NuageVerbe />
  </React.StrictMode>
);

verbeInput.render(
  <React.StrictMode>
    <VerbeInput />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

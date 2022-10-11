import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NuageVerbe from './inc/NuageVerbe'
import VerbeInput from './inc/VerbeInput'
import reportWebVitals from './reportWebVitals';



const nuageVerbe = ReactDOM.createRoot(document.getElementById('nuageVerbe'));
nuageVerbe.render(
  <React.StrictMode>
    <NuageVerbe />
  </React.StrictMode>
);

const verbeInput = ReactDOM.createRoot(document.getElementById('verbeInput'));
verbeInput.render(
  <React.StrictMode>
    <VerbeInput />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

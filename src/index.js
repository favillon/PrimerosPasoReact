import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

console.log("hola Mundo");

const divRoot = document.querySelector('#app');

ReactDOM.render(<PrimeraApp />, divRoot);


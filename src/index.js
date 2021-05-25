import React from 'react';
import ReactDOM from 'react-dom';

import PrimeraApp from './PrimeraApp';
import SegundaApp from './SegundaApp';

import './index.css';

console.log("hola Mundo desde index");

const divRoot = document.querySelector('#app');

ReactDOM.render(
    <>
        <PrimeraApp saludo='Hola Soy Goku' />
        <SegundaApp />
    </>, 
    divRoot
);


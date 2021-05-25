import React from 'react';
import ReactDOM from 'react-dom';

import PrimeraApp from './PrimeraApp';
import SegundaApp from './SegundaApp';
import CounterApp from './CounterApp';

import './index.css';


console.log("hola Mundo desde index");

const divRoot = document.querySelector('#app');

ReactDOM.render(
    <>
        <PrimeraApp saludo='Hola Soy Goku' />
        <SegundaApp />
        <CounterApp value={10}/>
    </>, 
    divRoot
);


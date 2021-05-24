import React from 'react';
import ReactDOM from 'react-dom';

console.log("hola Mundo");

const saludo =  <h1>Hola Mundo</h1>
const divRoot = document.querySelector('#app');



ReactDOM.render(saludo, divRoot);

console.log(saludo);
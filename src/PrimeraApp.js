// Funtional components

import { Fragment } from "react";

const PrimeraApp = () => {

    const  saludo = 'Hola Mundo desde constante';
    return (
        <Fragment>
            <h1> { saludo } </h1>
            <p>Mi Primera Aplicacion</p>
        </Fragment>
    );
}

export default PrimeraApp;
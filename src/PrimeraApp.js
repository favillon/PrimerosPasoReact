// Funtional components

import { Fragment } from "react";

const PrimeraApp = ( { saludo='Hola Mundo' } ) => {
    
    return (
        <Fragment>
            <h1> { saludo } </h1>
            <p>Mi Primera Aplicacion</p>
        </Fragment>
    );
}

export default PrimeraApp;
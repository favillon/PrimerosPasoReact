// Funtional components

import {Fragment} from "react";
import PropTypes from "prop-types";

const PrimeraApp = ( { saludo='Hola Mundo', subtitulo} ) => {
    
    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </Fragment>
    );
}

PrimeraApp.propType = {
    saludo : PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo, Mi Primera Aplicacion'
}

export default PrimeraApp;
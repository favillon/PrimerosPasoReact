


const nombre   = 'Son';
const apellido = 'Goku';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre= nombreCompleto) {
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
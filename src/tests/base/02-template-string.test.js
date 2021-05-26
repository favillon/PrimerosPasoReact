import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas templeate string ', ()=>{
    test('getSaludo Debe retornar Hola Goku', () =>{
        // Inicializacion 
        const nombre = 'Goku';
        // Estimulo
        const saludo = getSaludo(nombre);
        // Comportamiento
        expect(saludo).toBe(`Hola ${nombre}`)
    })
    test('getSaludo Debe retornar valor por defecto', () =>{
        
        // Estimulo
        const saludo = getSaludo();
        // Comportamiento
        expect(saludo).toBe(`Hola Son Goku`)
    })
})

import React from "react";
import { render } from "@testing-library/react";

import PrimeraApp from "../PrimeraApp";


describe('Pruebas <PrimeraApp /> ', ()=>{
    test('Debe mostrar Hola Soy Goku', () =>{
        // Inicializacion 
        const saludo = 'Hola Soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect( getByText( saludo ) ).toBeInTheDocument();
    
    })
})

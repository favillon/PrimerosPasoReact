import React from "react";
//import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";


describe('Pruebas <PrimeraApp /> ', ()=>{

    // jests
    // test('Debe mostrar Hola Soy Goku', () =>{
    //     // Inicializacion 
    //     const saludo = 'Hola Soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect( getByText( saludo ) ).toBeInTheDocument();
    
    // })

    test('Debe mostrar Hola Soy Goku', () =>{
        // Inicializacion 
        const saludo='Hola Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    
    })
    test('Debe mostrar un subtitulo', () =>{
        // Inicializacion 
        const saludo='Hola Soy Goku';
        const sub='Sayaying';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={sub} />
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(sub);
    
    })
})

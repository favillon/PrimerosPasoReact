import React from "react";
//import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from "../CounterApp";


describe('Pruebas <CounterApp /> ', ()=>{

    test('Debe mostrar el counter', () =>{
        
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();
    
    })
    test('Debe mostrar  el counter en 100', () =>{         
        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('p').text();
        
        expect(counterText).toBe('100');
    
    })
    test('Debe mostrar aumentar el counter en 101', () =>{         
        const wrapper = shallow(<CounterApp value={100} />);

        wrapper.find('button').at(0).simulate('click')
        
        const counterText = wrapper.find('p').text();
        expect(counterText).toBe('101');
    })

    test('Debe mostrar disminuir  el counter en 99', () =>{         
        const wrapper = shallow(<CounterApp value={100} />);

        wrapper.find('button').at(2).simulate('click')
        
        const counterText = wrapper.find('p').text();
        expect(counterText).toBe('99');
    })
    test('Debe mostrar resetear el counter', () =>{         
        const wrapper = shallow(<CounterApp value={50} />);

        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        
        const counterText1 = wrapper.find('p').text();
        //console.log(counterText1);
        expect(counterText1).toBe('52');

        wrapper.find('button').at(1).simulate('click')
        
        const counterText2 = wrapper.find('p').text();
        //console.log(counterText2);
        expect(counterText2).toBe('50');
    })
})

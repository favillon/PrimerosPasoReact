import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas  funciones ', ()=>{
    test('getUser debe retonar un objeto', () =>{
        // Inicializacion 
        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502',
        }
        // Estimulo
        const user = getUser();
        // Comportamiento
        expect(user).toEqual(userTest)
    })
    test('getUsuarioActivo debe retonar un objeto con mi nombre de parametro', () =>{
        // Inicializacion 
        const nombre = 'Goku'
        const userTest ={
            uid: 'ABC567',
            username: nombre,
        }
        // Estimulo
        const user = getUsuarioActivo(nombre);
        // Comportamiento
        expect(user).toEqual(userTest)
    })
})
import '@testing-library/jest-dom';

import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas heroes ', ()=>{
    test('debe retornar heroe por id', () =>{

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })
    test('debe retornar undefined por id que no existe', () =>{

        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    })
    test('Debe retornar Owner para  lo heores de DC ', () =>{

        const owner = 'DC';
        const arrHeroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter( (h) => h.owner === owner );
        
        expect(heroeData).toEqual(arrHeroe);
    })
    test('Debe retornar un array de dos posiciones con los heroes de Marvel ', () =>{

        const owner = 'Marvel';
        const arrHeroe = getHeroesByOwner(owner);
        
        expect(arrHeroe.length).toEqual(2);
    })
})
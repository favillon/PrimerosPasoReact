import '@testing-library/jest-dom';

import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con promesas', ()=>{
    test('getHeroeByIdAsync debe retornar un heroe async', (done) =>{

        const id = 1;
         getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un undefined async', (done) =>{

        const id = 10;
         getHeroeByIdAsync(id)
            .then(heroe => {
            }).catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
        
      
    })
})
import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Pruebas con asyn-await', ()=>{
    test('Debe retornar url segura de la imagen',  async() =>{

       const url = await getImagen();
       //console.log(url);
       expect(url.includes('https://')).toBe(true);
    });

    
})
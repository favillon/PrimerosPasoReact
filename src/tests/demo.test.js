//console.log("Hola Mundo");

describe('Pruebas demo ', ()=>{
    test('String Iguales', () =>{
        // Inicializacion 
        const mensaje = 'HOla Mundo';
        // Estimulo
        const mensaje2 ="HOla Mundo";
        // Comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })
})

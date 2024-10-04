const readline = require('readline');
const saludar = require('./js/module/saludos');
const numeroMenor = require('./js/module/numeroMenor');
const sumaNumero = require('./js/module/sumaNumero');
const contenedorElement = require('./js/module/contieneElementos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// console.log(saludar('William'));

// console.log(numeroMenor([1,2,3, 5]));
// console.log(sumaNumero([1,2,3, 5]));


rl.question('Ingresa los valores separados por espacios: ', (valoresIngresados) => {
    rl.question('Ingresa el valor que deseas buscar: ', (valorBuscado) => {
        // Llamar a la función contenedorElement
        console.log(contenedorElement(valoresIngresados, valorBuscado));

        // Cerrar la interfaz de lectura
        rl.close();
    });
});

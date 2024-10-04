// contieneElementos.js
const contenedorElement = (elementos, valorBuscado) => {
    const arrayElementos = elementos.split(' ');

    return arrayElementos.includes(valorBuscado)
        ? `El valor ${valorBuscado} sí se encuentra en el array de elementos.`
        : `El valor ${valorBuscado} no se encuentra en el array de elementos.`;
};

module.exports = contenedorElement;
const samYfrudo = (nombres, valor) => {
    const arrayElementos = nombres.split(' ');
    const sam = arrayElementos.indexOf('sam');
    const frudo = arrayElementos.indexOf('frudo');

    if (sam !== -1 && frudo !== -1) {
        if (Math.abs(sam - frudo) === 1) {
            return 'Sam y Frodo están juntos,  esta a salvo';
        } else {
            return 'Sam y Frodo no están juntos, esta en peligro ';
        }
    } else {
        return 'Uno o ambos nombres no se han encontrado.';
    }
};
module.exports = samYfrudo;
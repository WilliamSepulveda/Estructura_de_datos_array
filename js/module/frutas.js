const contarFrutas = (entrada) => {
    const frutas = {
        '🍎': 5,
        '🍐': 2,
        '🍑': 0
    }

    const frutasValidas = ['🍎', '🍐', '🍑'];

    // Contar cada fruta en la entrada
    for (const fruta of entrada) {
        if (frutasValidas.includes(fruta)) {
            frutas[fruta]++;
        }
    }

    let mensaje = 'Cantidad de frutas:\n';
    mensaje += `Manzanas 🍎: ${frutas['🍎']}\n`;
    mensaje += `Peras 🍐: ${frutas['🍐']}\n`;
    mensaje += `Duraznos 🍑: ${frutas['🍑']}`;

    return mensaje;
};

module.exports = contarFrutas;
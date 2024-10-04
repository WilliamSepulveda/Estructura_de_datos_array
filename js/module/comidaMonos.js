const comidaMonos = (comida) =>{
    const tragazon = {
        '🍌': 5,
        '🐵': 2
    }

    for (const banana of comida) {
        if(banana === '🍌') {
            tragazon['🍌']++
        } else if (banana === '🐵') {
            tragazon['🐵']++
        }

        return tragazon;
    }

    let mensaje = 'resultado: \n';
    mensaje += `banana 🍌: ${tragazon['🍌']}\n`;
    mensaje += `mono 🐵: ${tragazon['🐵']}\n`;

    const totalDeMonos = tragazon['🐵'];
    const totalDeBananas = tragazon['🍌']

    if( totalDeBananas > totalDeMonos ) {
        return ['cuantas bananas come un mono?', mensaje];
    } else {
        return 'el mono no tiene sufuciente bananas '
    }
    
}; 

module.exports = comidaMonos; 
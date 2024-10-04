const sumaNumero = (numero) =>{
    const suma = numero.reduce((a, b) => a + b, 0)
    return `la suma  los numeros da: ${suma}`
}
module.exports = sumaNumero;
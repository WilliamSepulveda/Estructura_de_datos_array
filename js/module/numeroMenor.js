const numeroMenor = (numeros) => {
    const menor = Math.min(...numeros);
    let resultado = `El número menor es: ${menor}`;
    return resultado;
};

module.exports = numeroMenor;
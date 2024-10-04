const buscarIndice = (elementos, valorBuscado) =>{
    const arrayElementos = elementos.split(' ');
    const indice = arrayElementos.indexOf(valorBuscado);
    if(indice !== -1){
        return `El indice del ${valorBuscado} se encuentra en la posición ${indice}`;
    }else{
        return `El valor ${valorBuscado} no se encuentra en el array`;
    }
}
module.exports = buscarIndice;

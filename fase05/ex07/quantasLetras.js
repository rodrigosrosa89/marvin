function quantasLetras(array) {
    var totalLetras = 0;
    var iterador = 0;
    while (iterador < array.length) {
        var qtde = array[iterador].length;
        totalLetras+= qtde;
        iterador++;
    }
    return totalLetras;
}



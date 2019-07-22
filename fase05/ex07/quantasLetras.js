function quantasLetras(array) {
    var total = 0
    for (var a = 0; a < array.length; a++) {
        var qtde = array[a].length;
        total += qtde;
    }
    return total;
}


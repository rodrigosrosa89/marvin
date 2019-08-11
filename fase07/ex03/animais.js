function animais (array) {
    var obj = new Object();
    var novaIdade = 5;

    for (var i = 0; i< array.length; i++) {
    var posicao = array[i]
    if (posicao[idade] != null) {
        
        posicao[idade] = novaIdade;
    }
    if (posicao[altura] != null) {
        delete array[altura]
    }
    novaIdade++;
    }
    
    return array;
}


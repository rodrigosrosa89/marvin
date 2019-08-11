function animais (array) {
    var obj = new Object();
    obj = array;
    var novaIdade = 5;

    for (var i = 0; i< array.length; i++) {
    var posicao = obj[i];
    if (posicao[idade] != null) {
        
        posicao[idade] = novaIdade;
    }
    if (posicao[altura] != null) {
        delete array[altura];
    }
    novaIdade++;
    }
    
    return array;
}


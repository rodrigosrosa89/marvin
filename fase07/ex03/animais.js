function animais (array) {
    var obj = new Object();
    obj = array;
    var novaIdade = 5;
    var i = 0
    while (i< array.length) {
    var posicao = obj[i];
    if (posicao['idade'] != null) {
        
        posicao['idade'] = novaIdade;
    }
    if (posicao['altura'] != null) {
        delete array[altura];
    }
    novaIdade++;
    i++;
    }
    
    return array;
}



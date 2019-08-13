function pinguins(arrayObj) {
    var i = 0 
    while ( i < arrayObj.length) {
        posicao = arrayObj[i];
        posicao.push({cabeca: "oculos de sol", camisa:'jaqueta polar', pes: "tenis"});
        i++;
    }
    return arrayObj;
    
}
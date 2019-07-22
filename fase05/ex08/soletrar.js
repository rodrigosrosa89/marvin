function soletrar(array) {
    var elementos = array.length;
    var novaList = [];
    for (var a = 0; a < elementos; a++){
        novaList.push(array.substr(a,1));
    }
    return novaList;
}


function soletrar(array) {
    var elementos = array.length;
    var novaList = [];
    var iterator = 0;
    while (iterator < array.length){
        novaList.push(array.substr(iterator,1));
        iterator++
    }
    return novaList;
}





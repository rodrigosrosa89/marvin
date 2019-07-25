function booleanos(array) {
    var i = 0;
    while(i < array.length) {
        if ((array[i].toString() == "true") || (array[i].toString() == "false")) {
             array.splice(i, 1);        
        }
        i++;
    }
    return array;
}


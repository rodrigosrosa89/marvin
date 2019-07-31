function por42(x, y) {
    var min, max;
    var contador = 0;
    var a = [];
    var n = 0;
    
    if(x < y){
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    }
    
    while (min <= max) {
        if (min % 42 === 0) {
            n++;
            if (n == 2) {
                return min;
            }
        }
        min++;
    }

    console.log("Não encontrado");
    return false;
}


function ateZero(n1) {
    var min, max;
    var contador = 0;
    var array = [];
    
    if(n1 > 0){
        min = 0;
        max = n1;
    } else {
        min = n1;
        max = 0;
    }
    
    while (min <= max) {
        array.push(min);
        min++;
    }
    
    return array;
}

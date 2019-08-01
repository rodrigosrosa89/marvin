function booleanos(a){
        
    var contador = a.length -1;
    while (contador >= 0) {
        var x = a[contador];
        if ((x != "true") && (x != "false")) { 
        if (x.toString() == "true" || x.toString() == "false"){
            a.splice(contador, 1);   
        }
        }
        contador--;
    }

    return a;        
}


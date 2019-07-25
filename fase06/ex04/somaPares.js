function somaPares(n1,n2) {
    numero1 = parseInt(n1);
    numero2 = parseInt(n2);
    var numeroMenor, numeroMaior;
    var totalPares = 0;
    
    if (numero1 < numero2) {
        numeroMenor = numero1;
        numeroMaior = numero2;
    } else {
        numeroMaior = numero1;
        numeroMenor = numero2;
    }
    
    while (numeroMenor <= numeroMaior) {
        if (numeroMenor % 2 === 0) {
            
        totalPares += numeroMenor;
    }
            numeroMenor++;

    }
    
    return totalPares;    
}


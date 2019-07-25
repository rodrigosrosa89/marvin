function por42(n1,n2) {
    var arrayMultiplos = [];
    var vetor = 2;
    while (vetor <= 100) {
        arrayMultiplos.push(42 * vetor);
        vetor ++;
    }
    var posicaoArray = 0;
        while (posicaoArray < 100) {
    var multiplo = arrayMultiplos[posicaoArray];
    if (((multiplo <= n1 && multiplo >= n2) || (multiplo <= n2 && multiplo >= n1))) {
        return multiplo;
    }
        posicaoArray++;
    }
}


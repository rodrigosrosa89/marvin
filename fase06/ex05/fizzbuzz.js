function fizzbuzz(n1,n2) {
    var numeroMenor, numeroMaior;
    if ( n1 < n2 ) {
        numeroMenor = n1;
        numeroMaior = n2;
    } else {
        numeroMenor = n2;
        numeroMaior = n1;
    }
    
    while (numeroMenor <= numeroMaior) {
        if ((numeroMenor % 3 ===0) && (numeroMenor % 5 ===0)) {
            console.log(numeroMenor + " FizzBuzz");
        } else if (numeroMenor % 3 === 0 ) {
            console.log(numeroMenor + " Fizz");
        } else if (numeroMenor % 5 === 0) {
            console.log(numeroMenor + " Buzz");
        } else {
            console.log(numeroMenor);
        }
        numeroMenor ++
    }
}


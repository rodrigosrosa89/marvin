function acharNumero (numero) {
    if ( numero < 5) {
        return "a";
    } else if ( numero >= 5 && numero <= 10) {
        return "b";
    } else if (numero > 10 && numero <= 100) {
        return "c";
    } else if (numero > 100) {
        return "d";
    }
}


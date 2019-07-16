function passadoOuFuturo(numeroEpoch) {
    
    var dataVerificadora = 1445385600000;
    if (numeroEpoch < dataVerificadora) {
        return "Passado";
    } else {
        return "Futuro";
    }

}


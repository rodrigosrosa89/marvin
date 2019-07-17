function alfabetoMilitar(vogal) {
    letra = vogal.toLowerCase();
    if (letra == "a") {
        return "alfa";
    } else if (letra == "e") {
        return "echo";
    } else if (letra == "i") {
        return "india";
    } else if (letra == "o") {
        return "oscar";
    } else if (letra == "u") {
        return "uniform";
    } else {
        return false;
    }
}


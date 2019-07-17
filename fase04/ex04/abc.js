function abc(string) {
    var primeira = string.substr(0,1);
    var letra = primeira.toLowerCase();
    if (letra == "a" || letra == "b" || letra == "c") {
        return true;
    } else {
        return false;
    }
}


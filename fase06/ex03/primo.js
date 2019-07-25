function primo(n1) {
    var i = 2;
    var primo = false;
    
    if (n1 == 2) {
    primo = true;
    return "Sim"
}
    while (i < n1) { 

    if( n1 % i === 0) {
        primo = false;
        break;
    }else {
        primo = true;
        i++;
    }
    }
    
    if (primo) {
        return "Sim";
        }else {
        return "Não";
        }
    
}


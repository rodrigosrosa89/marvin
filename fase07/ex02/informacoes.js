function informacoes(objeto,string) { 
    for (i = 0; i <objeto.length; i++) {
    
    if (string == objeto[i].toString()) {
        return objeto[i];
    } else{ 
        return false;
    }
    
    }
}


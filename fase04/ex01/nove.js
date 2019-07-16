function nove(numero) {
  var ultimoNumero = numero.toString();
  
    if (ultimoNumero.substr(-1,1) == "9") {
        return true;
    } else {
        return false;
    }
    
    console.log(ultimoNumero.substr(-1,1));
} 



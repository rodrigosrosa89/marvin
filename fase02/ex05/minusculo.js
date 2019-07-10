function minusculo(string) {
    
    var palavra = string;

    var palavra1 = palavra.substr(0,1);	
    palavra = palavra.replace(palavra1, palavra1.toLowerCase());
    return palavra;
}



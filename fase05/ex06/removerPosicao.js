function removerPosicao(array,n1) {
    if (n1 > array.length || n1 < 0) {
        alert ("Você informou um número fora do tamanho do Array ou menor que 0");
        return false;
    } else {
        array.splice(n1 - 1, 1);
        return array;
    }
}


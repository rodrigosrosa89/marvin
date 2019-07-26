function fibonacci(num){
        
        var a = 0 , b = 1;
        var contador = 1;
        if (num == 0) {
            return 0;
        }
        while(contador < num){
            var x = b;
            b = a + b;
            a = x;
            contador++;
        } 
        
        return b;
}
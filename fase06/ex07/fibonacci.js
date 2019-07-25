function fibonacci(n1) {
        if (n1 === 0) {
            return 0;
        }
        if (n1 === 1) {
            return 1;
        }
        else {
            return this.fibonacci(n1 - 1) +
                this.fibonacci(n1 - 2);
        }
    }


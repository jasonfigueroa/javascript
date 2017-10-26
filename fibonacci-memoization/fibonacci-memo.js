const fibonacci_memo = () => {
    const memo = {};

    const fibonacci = (n) => {
        if (n in memo) {
            return memo[n];
        } else if (n === 0) {
            return 0;
        } else if (n <= 2) {
            return 1;
        }
        
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n];
    };

    return fibonacci;
};
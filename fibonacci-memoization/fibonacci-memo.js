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
        console.log(memo);
        return memo[n];
    };

    return fibonacci;
};

// The following block of code was executed from the console in the browser, I 
// used the function timer from timer.js
// const t = timer(Date.now());
// const fib_memo = fibonacci_memo();
// console.log(`fibonacci_memo(46): ${ fib_memo(46) }`);
// console.log(`timeLapsed: ${ t(Date.now()) } milliseconds`);
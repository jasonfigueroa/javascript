// My intent is to use these in a personal experiment comparing a memoized
// fibonacci function vs a non-memoized fibonacci function

// An example of a valid parameter is Date.now()
const timer = (startTimeInMilliseconds) => {
    const startTime = parseFloat(startTimeInMilliseconds);
    
    // testing
    // console.log(`value: ${ startTime }`);
    // console.log(`typeof: ${ typeof startTime }`);
    
    return (endTimeInMilliseconds) => {
        const endTime  = parseFloat(endTimeInMilliseconds);
        
        // testing
        // console.log(`value: ${ endTime }`);
        // console.log(`typeof: ${ typeof endTime }`);

        return endTime - startTime;
    }
};

// returns formatted time in minutes and seconds as a string
const formattedTime = (timeInMilliseconds) => {
    const time = timeInMilliseconds;
    
    let timeStr = "";
    
    const minutes = Math.floor(time / 60000);
    const seconds = (time % 60000) / 1000;
    
    return `${ minutes } minutes and ${ seconds } seconds`;
};

/************************************************/
/* below is an example of how these can be used */
/************************************************/
const fib = (n) => {
	if (n == 0) {
		return 0;
	} else if (n <= 2) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
}

const t = timer(Date.now());
console.log(`fib(46): ${ fib(46) }`);
console.log(`timeLapsed: ${ formattedTime( t(Date.now()) ) }`);
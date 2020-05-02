var fib = function(N) {
    // if (N < 2) {
    //     return N;
    // } 
    // return fib(N-1) + fib(N-2);
    
    
    let memo = {}
    
    let fibby = (N, memo) => {
        if (memo[N]) {
            return memo[N];
        } else if (N < 2) {
            memo[N] = N;
            return memo[N];
        } else {
            memo[N] = fib(N-1, memo) + fib(N-2, memo);
            return memo[N];
        }
    }
    
    return fibby(N, memo);
};
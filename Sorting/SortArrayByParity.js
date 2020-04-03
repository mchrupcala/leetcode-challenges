/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let evens = [];
    let odds = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            evens.push(A[i])
        } else {
            odds.push(A[i])
        }
        
        
    }
    
    let ans = evens.concat(odds);
    
    return ans;
};
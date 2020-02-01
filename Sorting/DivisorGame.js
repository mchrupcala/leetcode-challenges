/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    
    //I cheated and looked at the discussion section where someone pointed out that any odd N means Alice loses.
    
    let aliceWin = false;
    
    if (N % 2 === 0) {
        aliceWin = true;
    }
    
    return aliceWin;
};
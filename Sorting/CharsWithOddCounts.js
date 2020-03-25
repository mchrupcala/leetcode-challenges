/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let strang = null;
    if (n % 2 === 0) {
        strang = 'a'.repeat(n-1) + 'b'
    } else {
        strang = 'a'.repeat(n)
    }
    
    return strang;
};
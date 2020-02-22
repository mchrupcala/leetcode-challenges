/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let ary = A
    for (let i = 0; i < ary.length; i++) {
        ary[i] = Math.abs(ary[i])
    }
    ary = ary.sort((a,b) => a - b);
    for (let i = 0; i < ary.length; i++) {
        ary[i] = ary[i] * ary[i]
    }
    return ary;
};
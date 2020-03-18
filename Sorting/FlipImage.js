/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let B = A.splice(0);
    B.forEach(i => {
        i.reverse();
    })
    for (let x = 0; x < B.length; x++) {
        for (let y = 0; y < B[x].length; y++) {
            if (B[x][y] === 0) {
                B[x][y] = 1
            } else {
                B[x][y] = 0
            }
        }
    }
    return B;
};
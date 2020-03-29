/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let isRight = heights.slice(0).sort((a,b) => a-b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== isRight[i]) {
            count += 1;
        }
    }
    return count;
};
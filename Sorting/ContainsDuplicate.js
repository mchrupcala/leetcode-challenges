/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let isDupe = false;
    let testSet = nums.slice(0);
    
    for (let i = 0; i < nums.length; i++) {
        if (isDupe === true) {
            break;
        } else {
            testSet.shift();
            if (testSet.includes(nums[i])) {
                isDupe = true;
            }
        }
    }
    
    return isDupe;
};
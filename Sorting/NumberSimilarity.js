/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arry = nums.slice(0).sort((a,b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        result.push(arry.indexOf(nums[i]))
    }    
    
    return result;
};
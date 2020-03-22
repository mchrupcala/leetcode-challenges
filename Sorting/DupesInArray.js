/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let copy = [];
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (!copy.includes(nums[i])) {
            copy.push(nums[i])
        } else {
            answer.push(nums[i])
        }
    }
    
    return answer;
};
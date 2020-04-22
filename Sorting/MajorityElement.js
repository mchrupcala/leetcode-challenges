var majorityElement = function(nums) {
    //create an object. Fill object with entries for each number, value = count.
    let numsObject = {};
    let topCount = 0;
    let majorityElement = null;
    
    //loop entries in array. if count > last count, update.
    for (let num of nums) {
        if (numsObject[num]) {
            numsObject[num] += 1;
        } else {
            numsObject[num] = 1;
        }
    }
    
    for ([key, val] of Object.entries(numsObject)) {
        if (val > topCount) {
            majorityElement = parseInt(key);
            topCount = val;
        }
    }

    
    return majorityElement;
};


console.log(majorityElement([1, 2, 3, 1, 1]));
console.log(majorityElement([0, 0, 1]));
console.log(majorityElement([-10, -5, 1, 2, 3, -10]));


    //Time complexity of O(n)...how can i speed that up?
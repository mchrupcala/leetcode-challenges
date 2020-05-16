var singleNumber = function(nums) {
    //radix sort (nk) time complex, then return the first i where i+1 !== i
    
    //add int, count to an object. return key where freq = 1;
    
    
    let numsObject = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (numsObject[nums[i]]) {
            numsObject[nums[i]] +=1;
        } else {
            numsObject[nums[i]] = 1;
        }
    }
    
    for ([key,val] of Object.entries(numsObject)) {
        if (val === 1) {
            return key;
        }
    }
    
    return -1;
};
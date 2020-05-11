var topKFrequent = function(nums, k) {
    if (nums.length === 1) return nums;
    // if (nums.length === 2 && nums[0] === nums[1]) return [nums[0]];
    // if (nums.length === 2) return nums;
    //.sort() is ruled out.
    //Loop through all array elements. Add to dictionary, based on frequency. Loop through array, adding int value to a bucket array. Return the length-1 and length-2 values in that array.
    
    let freqs = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (freqs[num]) {
            freqs[num] += 1;
        } else {
            freqs[num] = 1;
        }
    }
    
    // let counts = new Array(Math.max(...nums)+1).fill([]);
    let counts = new Array(Math.max(...nums)+1).fill(0);
        //I have NO clue what happened when I tried pushing int's into these arrays. Makes no sense why looping through the object once would push every int into every array in the 2D.
    Object.entries(freqs).map(([num, count]) => {
        counts[count] = parseInt(num);
    })
    
    return Object.keys(freqs).sort((a,b) => freqs[b] - freqs[a]).slice(0,k);

};



//write my own custom ...bucket sort (O(n) time). once sorted, loop array. Track a 'max' and 'secondMax' touples. Increment frequency and change val until I found each. return keys
var lastStoneWeight = function(stones) {
    if (!stones) return 0;
    

    
    //Option 1:
    //Inside my while loop --> stones.sort(). shift the first two (biggest) elements. smash them, add, repeat.
        // (Finished in 13:30)
    while (stones.length > 1) {
    stones.sort((a,b) => b - a);
    const stone1 = stones.shift();
    const stone2 = stones.shift();
    let diff;

    if (stone1 === stone2) {
        continue;
    } else {
        diff = stone1 - stone2;
        stones.push(diff);
        continue;
    }
}
    
    
    
    //Option 2:
    //add all stones to a 2D array (constant access). Bucket sort- array index based on stone's value. Loop in reverse, find the largest two values. Smash, empty 2D array, repeat until length is 1 or smaller.
    
    return stones;
};
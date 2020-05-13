//Still incorrect

var numTimesAllBlue = function(light) {
    if (light.length === 0) return 0;
    let n = light.length;
    let bulbs = [];
    let moments = 0;
    
    //build bulb array
    for (let i = 0; i < n; i++) {
        bulbs.push(0);
    }
    // console.log(bulbs);
    
    //slice 0 - index. are all equal to 1? 
    for (let i = 0; i < light.length; i++) {
        let bulb = bulbs[light[i]-1];
        // console.log(bulb);
        if (bulb) {
            bulbs[light[i]-1] = 0;
        } else {
            bulbs[light[i]-1] = 1;
        }
        console.log('bulbs', bulbs)
        let checkSlice = bulbs.slice(0,light[i]);
        console.log(checkSlice);
        let sum = 0;
        
        for (let j of checkSlice) {
            sum += j;
        }
        if (sum === checkSlice.length) {
            moments += 1;
        }
    }
    return moments;
};
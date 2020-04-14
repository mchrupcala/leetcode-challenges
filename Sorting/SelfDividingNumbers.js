/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let dividingNums = [];
    let isDivisible = true;
    
    for (let i = left; i <= right; i++) {
        let digits = i.toString().split('');
        isDivisible = true;
        
        for (let currentDigit of digits) {
            if (currentDigit !== 0 && i % currentDigit === 0) {
                continue
            } else {
                // console.log('uh oh', currentDigit);
                isDivisible = false;
            }
        }
        if (isDivisible === true)  {
            dividingNums.push(i);
        }
    }
    
    return dividingNums;
};
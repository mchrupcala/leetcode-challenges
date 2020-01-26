/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let counter = 0;
    let newNum = num;
    
    while (newNum !== 0) {
        
    if (newNum === 0 ) {
       return true; 
    } else if (newNum % 2 === 0) {
        newNum = newNum / 2;
        counter += 1;
    } else {
        newNum -= 1;
        counter += 1;
    }
    }
    
    return counter;
};
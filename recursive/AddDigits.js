var addDigits = function(num) {
    //split string of num into digits
    let numString = num.toString().split('');
    let sum = 0;
    
    //for length of array, sum digits.
    for (let char of numString) {
        sum += parseInt(char);
    }
    
    //recurse
    if (sum > 9) {
        return addDigits(sum)
    }
    
    return sum;
};
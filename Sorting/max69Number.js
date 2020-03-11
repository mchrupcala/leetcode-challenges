/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let maximum = num;
    let digits = num.toString(10).split('');
    let subs = [];
    
    for (let i = 0; i < digits.length; i++) {
        let newSub = digits.slice(0);

        if (newSub[i] === '6') {
            newSub[i] = '9'
        } else {
            newSub[i] = '6'
        }
        
        subs.push(parseInt(newSub.join('')))
    }
    subs.push(num)
    maximum = subs.sort((a,b) =>  a-b).pop()

    return maximum;
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    //MY FIRST PASS, TOOK ME 23 MINUTES BUT I WAS LOST ON HOW TO FINISH IT
//     let combos = [];
//     let digString = digits.split('');
//     let dictObj = {
//         2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
//     }
    
//     //Have to switch the digits in digString to alpha combos
//     for (let x = 0; x < digString.length; x++) {
//         digString[x] = dictObj[digString[x]]
//     }

//     function addCombos(digs) {
        
//         for (let d of digs) {
//             let digsCopy = digs.filter(j => {
//                 return j != d
//             });
//             console.log(digsCopy);
//             digsCopy.forEach(i => {
//                 i.forEach(j => {
//                     if (!combos.includes(i+j)) {
//                         combos.push(i+j);
//                 }                    
//                 })
//             })
//             // addCombos(digsCopy)
//         }
//     }
//     console.log(digString);
//     addCombos(digString);
    
//     return combos;
    
    
    let result = [];
    let mapping = [
        '0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
    ]
    
    if (digits ===null || digits.length === 0) {
        return result;
    }
    
    function addLetterCombinations(current_string, windex) {
    //BASE CASE = a winning combination. this is when my index = digits.length
        if (digits.split('').length === windex) {
            result.push(current_string)
            return 1;
            }
        
    //grab the string of letters in dictObj that map to my digit
        let letters = mapping[digits[windex]]
        
    // for loop, i is going to count up through each letter in the string. 'a', then 'b', then 'c'
        for (let i = 0; i < letters.length; i++) {
        //addCombos()  --> recursive call, once for each letter in the string at current digit
            addLetterCombinations(current_string + letters[i], windex+1)
        }
    }
    
    addLetterCombinations("", 0);
    return result;
};




/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let charIndexes = [];
    let answer = [];
    let strings = S.split('');
    
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === C) {
            charIndexes.push(i);
        }
    }
    
    for (let i = 0; i < strings.length; i++) {
        let smallIndex = Math.abs(charIndexes[0] - i)
        for (let j = 0; j < charIndexes.length; j++) {
            if (Math.abs(charIndexes[j] - i) < smallIndex) {
                smallIndex = Math.abs(charIndexes[j] - i)
            }
        }
        answer.push(smallIndex);
    }
    
    return answer;
};
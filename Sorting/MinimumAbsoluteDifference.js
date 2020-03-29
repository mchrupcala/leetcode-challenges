/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let answer = [];
    let correct = arr.slice(0).sort((a,b) => a-b);

    let min = Infinity;
    
    for (let i = 0; i < correct.length-1; i++) {
        if (correct[i+1] - correct[i] < min) {
            min = correct[i+1] - correct[i]
        }
    }
    
    for (let i = 0; i < correct.length-1; i++) {
        if (correct[i+1] - correct[i] === min) {
            answer.push([correct[i], correct[i+1]])
        }
    }
    
    return answer;
};
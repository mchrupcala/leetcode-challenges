var findLucky = function(arr) {
    if (arr.length === 0) return -1;
    let answer = -1;
    let freqDictionary = {};
    let lucky = 0;
    
    //iterate the list. store the frequency of each integer in a dictionary
    for (let num of arr) {
        if (!Object.keys(freqDictionary).includes(num.toString())) {
            freqDictionary[num] = 1;
        } else {
            freqDictionary[num.toString()] += 1;
        }
    }
    
    //find the highest frequency, return the key.
    for ([newKey, val] of Object.entries(freqDictionary)) {
        let tempLucky = parseInt(newKey);
        if (tempLucky === val && tempLucky > answer) {
            answer = tempLucky;
        }
    }
    
    
    return answer;
};



    //FIRST PASS (FAILED)
    {
//     let sortedArray = arr.sort((a,b) => b-a);
//     let currentNumFrequency = 0;
//     let lastNum = 0;
//     let currentNum = 0;
//     let iterator = 0;
//     let didBreak = 0;
    
//     for (let i of sortedArray) {
//         currentNumFrequency += 1;
//         console.log(i, currentNumFrequency, lastNum)
//         if (i === lastNum && currentNumFrequency === i) {
//             answer = i;
//             didBreak = 1;
//             break;
//         } else if (i !== lastNum && lastNum !== 0) {
//             currentNumFrequency = 0;
//         }
//         lastNum = i;
//     }
//     if (sortedArray[sortedArray.length-1] === lastNum && didBreak === 0) {
//         console.log('did ths run?')
//         currentNumFrequency += 1;
//         if (currentNumFrequency === lastNum) {
//             answer = lastNum;            
//         }
//     }
    
//     console.log(currentNumFrequency);
    }
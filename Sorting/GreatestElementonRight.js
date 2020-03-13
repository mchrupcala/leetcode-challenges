/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let newArr = arr.slice(0);
    let tempArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (i === arr.length-1) {
            newArr[i] = -1
        } else {
            tempArr = newArr.slice(i+1)
            newArr[i] = Math.max(...tempArr)
        }
    }
    
    
    return newArr;
};
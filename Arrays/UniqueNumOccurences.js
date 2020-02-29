/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let isUnique = false;
    
    let uniques = new Set(arr);
    let valsObj = {};

    for (let i = 0; i < arr.length; i++) {
        
        if (!Object.keys(valsObj).includes(arr[i].toString())) {
            valsObj[arr[i]] = 1
        } else {
            valsObj[arr[i]] = valsObj[arr[i]] + 1;
        }
    }
    let objUniques = new Set(Object.values(valsObj))

    if (Object.values(valsObj).length === objUniques.size) {
        isUnique = true;
        }
    return isUnique;
};
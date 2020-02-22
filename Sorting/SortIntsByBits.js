/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let result = [];
    let newarr = [];
    let dict = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
        18: [],
        19: [],
        20: [],
        21: [],
        22: [],
        
    }

    //convert all int's to binary
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i].toString(2))
    }

    //count the # of 1's included in each
    for (let i = 0; i < newarr.length; i++) {
        let ones = newarr[i].replace(/0/g, '')
        if (dict[ones.length]) {
             dict[ones.length].push(newarr[i])   
        }
    }

    for (let i = 0; i < Object.keys(dict).length; i++) {
        dict[i] = dict[i].sort((a, b) => a -b)
        if (dict[i].length !== 0) {
            console.log(dict[i])
            for (let j = 0; j < dict[i].length; j++) {
                result.push(parseInt(dict[i][j],2))
            }
        }

    }
    return result;
};
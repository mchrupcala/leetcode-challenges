/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let ids = [];
    let dict = {};
    let answ = [];
    if (groupSizes === null) return null;
    for (let i = 0; i < groupSizes.length; i++) {
        ids.push(i);
        dict[groupSizes[i]] = [];
    }
    
    for (let j = 0; j < groupSizes.length; j++) {
        dict[groupSizes[j]].push(ids[j])
    }
    
    for ([key, vals] of Object.entries(dict)) {
        // console.log(key, vals);
        while (vals.length) {
            answ.push(vals.splice(0, parseInt(key)))
        }
    }

    // console.log(ids, dict);
    
    
    return answ;
};
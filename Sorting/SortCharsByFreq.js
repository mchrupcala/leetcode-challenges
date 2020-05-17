var frequencySort = function(s) {
    let answerString = '';
    let letterObj = {};
    let letters = s.split('');
    
    //Create a dictionary for all letters & their frequency
    for (let l of letters) {
        if (!(l in letterObj)) {
            letterObj[l] = 1;
        } else {
            letterObj[l] += 1;
        }
    }
    
    //Sort by frequency in the dictionary. Add the letters by greatest-least frequency.
    while (Object.keys(letterObj).length > 0) {
        let max = null;
        let maxKey = null;
        for (let [key, value] of Object.entries(letterObj)) {
            if (max === null || value > max) {
                max = value;
                maxKey = key;
            }
        }
        delete letterObj[maxKey];
        answerString += maxKey.repeat(max);
    }
    
    // console.log(letters);
    // letters.sort();
    // console.log(letters);
    // letters.sort((a,b) => letterObj[b]-letterObj[a]);
    
    return answerString;
};
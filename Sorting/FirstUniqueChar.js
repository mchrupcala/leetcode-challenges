var firstUniqChar = function(s) {
    let answer = -1;
    if (s.length === 1) return 0;
    let stringObj = {};
    
    for (let i = 0; i < s.length; i++ ) {
        if (!stringObj[s[i]]) {
            stringObj[s[i]] = 1;
        } else {
            stringObj[s[i]] += 1;
        }
    }
    
    
    for (let i = 0; i < s.length; i++ ) {
        if (stringObj[s[i]] === 1) {
            answer = i;
            break;
        }
    }
    
    
    
    
    
//     for (let i = 0; i < s.length-1; i++ ) {
//         let stringSlice = s.slice(i+1);
//         console.log(stringSlice);
//         if (!stringSlice.includes(s[i])) {
//             answer = i;
//             break;
//         }
//     }
    
    return answer;
};
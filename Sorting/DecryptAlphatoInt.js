/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let dictObj = {'1': 'a', '2':'b', '3':'c', '4':'d', '5':'e', '6':'f', '7':'g', '8':'h', '9':'i',
    '10':'j', '11': 'k', '12': 'l', '13':'m', '14':'n', '15':'o', '16':'p', '17':'q', '18': 'r', '19':'s', '20':'t', '21':'u', '22': 'v', '23':'w', '24':'x', '25':'y', '26':'z'}
    let resString=[];
    let sub = s.split('');
    
    for (let i = 0; i < sub.length; i++) {
        if (sub[i+2] === '#') {
            let temp = sub[i] + sub[i+1]
            resString.push(dictObj[temp])
            i+=2
        } else {
            resString.push(dictObj[sub[i]])
        }
    }
    
    
    return resString.join('');
};
var findWords = function(words) {
    //3 arrays of letters per keyboard row
    let answerArray = [];
    let row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    
    words.forEach(word => {
        splitWord = word.split('');
        let row1Chars = [];
        let row2Chars = [];
        let row3Chars = [];
        
        splitWord.forEach(c => {
            c = c.toLowerCase();
            if (row1.includes(c)) row1Chars.push(c);
            if (row2.includes(c)) row2Chars.push(c);
            if (row3.includes(c)) row3Chars.push(c);
        })
        
        if (row1Chars.length === splitWord.length || row2Chars.length === splitWord.length || row3Chars.length === splitWord.length) {
            answerArray.push(word);
        }
    })
    
    //for each letter in each word, check if all included in one array. If not, remove
    
    return answerArray;
};
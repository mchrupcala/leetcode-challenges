/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let concatWords = [];
    let patternMatch = {
            "A": ".-",
            "B": "-...",
            "C": "-.-.",
            "D": "-..",
            "E": ".",
            "F": "..-.",
            "G": "--.",
            "H": "....",
            "I": "..",
            "J": ".---",
            "K": "-.-",
            "L": ".-..",
            "M": "--",
            "N": "-.",
            "O": "---",
            "P": ".--.",
            "Q": "--.-",
            "R": ".-.",
            "S": "...",
            "T": "-",
            "U": "..-",
            "V": "...-",
            "W": ".--",
            "X": "-..-",
            "Y": "-.--",
            "Z": "--..",
            "0": "-----",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----."
			}
    for (let i = 0; i < words.length; i++) {
         concatWords.push(words[i].split(''))
         }

    for (let i = 0; i < concatWords.length; i++) {
        concatWords[i].forEach(function(j,idx) {
            this[idx] = patternMatch[j.toUpperCase()]
        }, concatWords[i])
    }

    concatWords.forEach(function(i, idx) {
        this[idx] = i.join('')
    }, concatWords)
    concatWords = new Set(concatWords)
    
    return concatWords.size;
};
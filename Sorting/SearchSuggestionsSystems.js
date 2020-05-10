var suggestedProducts = function(products, searchWord) {
    let answerArray = [];
    
    products.sort();
    
    for (let i = 0; i < searchWord.length; i++) {
        answerArray.push([]);
    }
    
    //split searchWord into array of strings
    searchWord.split("");
    
    
    //create list of products that start with first char
    let productMatches = products.slice(0);
    
    for (let j = 0; j < products.length; j++) {
        let word = products[j].split('');
        if (word[0] === searchWord[0]) {
            productMatches.push(word);
        }
    }
    
    //iterate through length. 
    for (let i = 0; i < searchWord.length; i++) {
        let userString = searchWord.slice(0,i+1);
        // console.log("user string: ", userString);
        for (let j = 0; j < productMatches.length; j++) {
            
            if (answerArray[i].length < 3 && userString === productMatches[j].slice(0,i+1)) {
                answerArray[i].push(productMatches[j])
            } else if (answerArray[i].length >= 3) {
                continue;
            }
        }

        
    }

    
    
    return answerArray;
};


//Time Complexity: O (n log n)
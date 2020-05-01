var dailyTemperatures = function(T) {
    let answer = [];
    
    for (let i = 0; i < T.length; i++) {
        let currentTemp = T[i];
        
        //Check for hotter days.
        for (let j = i+1; j < T.length; j++) {
            if (T[j] > currentTemp) {
                answer.push(j - i);
                break;
            }
        }
        
        //No hotter days found
        if (answer.length < i+1) {
            answer.push(0);
        }
        
    }
    
    return answer;
};
checkOut(id, stationName, t) {
    let startingStation = customerTimes[id]["startStation"];
    let startingTime = customerTimes[id]["startingTime"];
    
    if (!timesFromStartingStation[startingStation]) {
        timesFromStartingStation[startingStation] = {};
    }
    
    if (!timesFromStartingStation[startingStation][stationName]) {
        timesFromStartingStation[startingStation][stationName] = [];
    }

    
    //Add
    timesFromStartingStation[startingStation][stationName].push(t-startingTime);
    
    customerTimes[id][startingStation] = null;
    customerTimes[id][startingTime] = null;
};


/** 
* @param {string} startStation 
* @param {string} endStation
* @return {number}
*/ 
getAverageTime(startStation, endStation) {
    let allTimes = timesFromStartingStation[startStation][endStation];
    let avgTime = 0;
    
    for (let i = 0; i < allTimes.length; i++) {
        avgTime += allTimes[i];
    }
    avgTime = avgTime / allTimes.length;
    
    return avgTime;
};
};


/** 
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/
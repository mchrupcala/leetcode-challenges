var angleClock = function(hour, minutes) {
    //what kind of increments am I looking at?
        //within a minute, I have 6 degrees
        //Between 12:00 and 12:01, I have 0 degrees to 5 degrees as valid answers
    
    //Find the larger or smaller of the DIFFERENCE between hour hand and minute hand.
        //^^probably smarter to find both, return the smaller of the two.
    
    
    //not finished, investigate a little
    
    let minsAngle = minutes/60 * 360;
    let hoursAngle = hour % 12 * 30 + minutes / 2;
    console.log(minsAngle, hoursAngle);
    // let result = null;
    // console.log(Math.abs(minsAngle - hoursAngle), Math.abs(hoursAngle - minsAngle))
    // if (Math.abs(minsAngle - hoursAngle) < Math.abs(hoursAngle - minsAngle)) {
    //     result = Math.abs(minsAngle - hoursAngle)
    // } else {
    //     result = Math.abs(hoursAngle - minsAngle)
    // }
    
    return Math.min(Math.abs(minsAngle - hoursAngle), 360 - Math.abs(minsAngle - hoursAngle));
};
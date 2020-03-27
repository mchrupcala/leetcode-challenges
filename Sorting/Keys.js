/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitAll = false;
    let foundKeys = [];
    
    let visit = (keys) => {
        for (key of keys) {

            //BASE CASE
            if (foundKeys.includes(key)) {
                return;
            }
            
            foundKeys.push(key)
            rooms[key].forEach(i => {
                visit([i])
            })
            

        }
    }
    
    visit([0]);

    foundKeys.length === rooms.length ? visitAll = true : visitaAll = false;
    return visitAll;
};
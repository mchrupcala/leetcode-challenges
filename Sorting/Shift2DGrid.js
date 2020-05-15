var shiftGrid = function(grid, k) {
    if (grid.length === 0) return [];
    
    while (k !== 0) {
        let carryInt;
        
        for (let i = 0; i < grid.length; i++) {
            let temp;
            
            for (let j = 0; j < grid[i].length; j++) {
                if (grid.length === 1 && grid[i].length === 1) {
                    return grid;
                }
                if (i === grid.length-1 && j === grid[i].length-1) {
                    
                    grid[0][0] = grid[i][j];
                    grid[i][j] = carryInt;
                } else {
                    temp = grid[i][j];
                    grid[i][j] = carryInt;
                    carryInt = temp;
                }
            }
        
        }
    k -= 1;

    }
    
    return grid;  
};
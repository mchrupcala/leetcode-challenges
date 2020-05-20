//still incorrect

var verticalTraversal = function(root) {
    if (!root) return [];
    let valuesAndCoordinates = {};
    let y = 0;
    let x = 0;
    let minX = 0;
    let maxX = 0;
    
    let traverse = (node, x, y, valuesAndCoordinates, minX, maxX) => {
        // console.log(node.val);
        
        //add node's value & coord to dictionary
        valuesAndCoordinates[node.val] = [x,y];
        
        if (node.left) {
            x -= 1;
            // console.log(x);
            if (x < minX) {
                // console.log(x);
                minX = x;
                // console.log(minX);
            }
            y -= 1;
            traverse(node.left, x, y, valuesAndCoordinates, minX, maxX);
        }

        if (node.right) {
            x += 2;
            if (x > maxX) {
                maxX = x;
            }
            if (node.left) {
                y = y;
            } else {
                y -= 1;
            }
            
            traverse(node.right, x, y, valuesAndCoordinates, minX, maxX);
        }
        
    }
    
    traverse(root, x, y, valuesAndCoordinates, minX, maxX);
    // console.log(minX, maxX);
    // console.log(valuesAndCoordinates);
    
    //Create a 2D array the size of the span of X values in the tree

    
    for (let i of Object.values(valuesAndCoordinates)) {
        if (i[0] < minX) {
            minX = i[0]
        }
        if (i[0] > maxX) {
            maxX = i[0]
        }
    }
    
    let answer = [];
    let verticals = maxX - minX;
    console.log(verticals);
    for (let i = 0; i <= verticals; i++) {
        answer.push([])
    }

    // console.log(answer);
    console.log(valuesAndCoordinates);
    //push values into the empty subarrays based on x,y values
    for (let [key, value] of Object.entries(valuesAndCoordinates)) {
        let pushDifference = 0-minX;
        // console.log(pushDifference, value[0]+pushDifference);
        
        answer[value[0]+pushDifference].push(key);
    }
    
    return answer;
};
//still incorrect

var flipEquiv = function(root1, root2) {
    //I need to check if two trees are mirrors of each other. Which means I can traverse both at the same time, in-order for one and...post-order for the other? (left & right) and if any val does NOT match, return false.
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    let isEqual = true;
    let stack1 = [];
    let stack2 = [];
    let currentNode1 = null;
    let currentNode2 = null;
    
    stack1.push(root1);
    stack2.push(root2);
    let val1 = null;
    let val2 = null;
    
    //traverse both trees. print values.
    while (stack1.length !== 0 || stack2.length !== 0) {

        if (stack1.length !== 0) {
            currentNode1 = stack1.pop();
            console.log(currentNode1.val);
            val1 = currentNode1.val;
            if (stack1.left) {
                stack1.push(currentNode1.left);
            }
            if (stack1.right) {
                stack1.push(currentNode1.right);
            }
        } else {
            val1 = null;
        }
        
        
        if (stack2.length !== 0) {
            currentNode2 = stack2.pop();
            console.log(currentNode2.val);
            val2 = currentNode2.val;
            if (stack2.right) {
                stack2.push(currentNode2.right);
            }
            if (stack2.left) {
                stack2.push(currentNode2.left);
            }
        } else {
            val2 = null;
        }
        console.log(val1, val2);
        if (val1 !== val2) {
            console.log(val1, val2);
            isEqual = false;
            break;
        }
    }
    
    //conditional, if not equivalent, break the loop, return false
    
    
    return isEqual;
};
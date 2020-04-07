/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    if (target === null) return null;
    let current = null;
    let stack = [];
    
    stack.push(cloned);
    
    while (stack !== null) {
        current = stack.pop();
        if (current.val !== target.val) { 
            if (current.left !== null) {
                stack.push(current.left)
            }
            if (current.right !== null) {
                stack.push(current.right)
            }        
        } else {
            break;
        }
    }
    
    return current;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // console.log(root)
    let s = [];
    let path = [];
    let size = 0;
    let depth = 0;
    let current_value = null;
    
    s.push(root)
    
    if (root !== null) {
        
        while (s.length !== 0) {
            current_value = s[s.length-1]
            
            if (path.length !== 0 && current_value == path[path.length-1]) {
                if (path.length > depth) {
                    depth = path.length
                }
                path.pop();
                s.pop();
            } 
            else {
                path.push(current_value)
            if (current_value.right !== null) {
                s.push(current_value.right)
            }
            if (current_value.left !== null) {
                s.push(current_value.left)
            }
        }
    }
    
}
    return depth;
};
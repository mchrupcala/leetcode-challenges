/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let current_value = temp = null;
    let q = [];
    
    q.push(root)
    while (q.length !== 0) {
        current_value = q.pop()
        if (current_value !== null) {
        current_value.left !== null ? temp = current_value.left : temp = null
        current_value.right !== null ? current_value.left = current_value.right : current_value.left = null
        current_value.right = temp            
        }
        
        if (current_value !== null && current_value.left !== null) {
            q.push(current_value.left)
        }
        if (current_value !== null && current_value.right !== null) {
            q.push(current_value.right)
        }
    }
    
    
    return root;
};
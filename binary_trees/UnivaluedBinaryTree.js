/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let isUni = true;
    let uniValue = root.val;
    let current_node = null;
    let s = [];
    s.push(root)
    
    while (s.length !== 0) {
        current_node = s.pop();

        if (![uniValue, null].includes(current_node.val)) {
            isUni = false;
            break;
        }
        if (current_node.left !== null) {
            s.push(current_node.left)
        }
        if (current_node.right !== null) {
            s.push(current_node.right)
        }
    }
    
    return isUni
};
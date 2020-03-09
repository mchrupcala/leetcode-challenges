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
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function isMirror(right, left) {
        if (!right && !left) return true;
        if (!right || !left || right.val !== left.val) return false;
        
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    
    
    return isMirror(root.left, root.right)
};
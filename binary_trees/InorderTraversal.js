/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    };
    let traverse = (node, path) => {
        if (!node) {
            return;
        }
        traverse(node.left, path)
        path.push(node.val)
        traverse(node.right, path)
        return path;
    }
    
    
    return traverse(root, path=[]);
};
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let traverse = (node, path) => {
        
        if (!node) {
            return;
        }
        path.push(node.val);
        
        for (child of node.children) {
            traverse(child, path);            
        }

        return path;
    }
    
    traverse(root, path=[]);
    return path;
};
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let traverse = (node, path) => {
        if (!node) {
            return;
        }
        
        for (child of node.children) {
            traverse(child, path)
        }
        path.push(node.val);
        return path;
    }
    
    traverse(root, path=[]);
    return path;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let sameTrees = true;
    let current_node = null;
    let tree1 = [];
    let tree2 = [];
    let queue = [];
    
    let traverse = (tree, tree_array) => {
        if (tree !== null) {
        queue.push(tree);
        tree_array.push(tree.val)
        
        while (queue.length > 0) {
            current_node = queue.shift()

            if (current_node !== null) {
                
                if (current_node.left !== null) {
                    queue.push(current_node.left)
                    tree_array.push(current_node.left.val)
                } else {
                    tree_array.push(null)
                }
                if (current_node.right !== null) {
                    queue.push(current_node.right)
                    tree_array.push(current_node.right.val)
                }
            }
        }
    }
}
    
    traverse(p, tree1)
    traverse(q, tree2)
    if (tree1.length === 0 && tree2.length === 0) {
        sameTrees = true;      
    } else if (tree1.length === 0 || tree2.length === 0) {
        sameTrees = false; 
    }
    for (let i = 0; i < tree1.length; i++) {
        if (tree2[i] !== tree1[i]) {
            sameTrees = false;
            break;
        }
    }
    
    return sameTrees
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let isSim = true;
    let leaf1Seq = [];
    let leaf2Seq = [];
    let stack = [];
    let node = null;
    
    
    //Traverse tree 1
    stack.push(root1);
    while (stack.length !== 0) {
        node = stack.pop()

        if (node.left !== null) {
            stack.push(node.left)
        } 
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left === null && node.right === null) {
            leaf1Seq.push(node.val)
        }
    }
    stack = [];
    node = null;
    console.log(leaf1Seq, leaf2Seq);
    
    //Traverse tree 2
    stack.push(root2);
    while (stack.length !== 0) {
        node = stack.pop()

        if (node.left !== null) {
            stack.push(node.left)
        } 
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left === null && node.right === null) {
            leaf2Seq.push(node.val)
        }
    }

    let longestArr = 0;
    leaf1Seq.length > leaf2Seq.length ? longestArr = leaf1Seq.length : longestArr = leaf2Seq.length
    for (let i = 0; i < longestArr; i++) {
        if (leaf1Seq[i] !== leaf2Seq[i]) {
            isSim = false;
        }
    }
    return isSim;
};
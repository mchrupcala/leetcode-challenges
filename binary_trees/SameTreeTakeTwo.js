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
    let isSame = true;
    let pStack = [];
    let pCurrentNode = null;
    let qStack = [];
    let qCurrentNode = null;
    if (p == null && q == null) return true;
    if ((p == null && q) || (q == null && p)) return false;
    
    pStack.push(p);
    qStack.push(q);
    
    while (pStack.length > 0 && qStack.length > 0) {
        pCurrentNode = pStack.pop();
        qCurrentNode = qStack.pop();
        
        if (pCurrentNode.left) {
            pStack.push(pCurrentNode.left)
        }
        if (qCurrentNode.left) {
            qStack.push(qCurrentNode.left)
        }
        if (pStack.length !== qStack.length) {
            isSame = false;
            break;
        }
        if (pCurrentNode.right) {
            pStack.push(pCurrentNode.right)
        }
        if (qCurrentNode.right) {
            qStack.push(qCurrentNode.right)
        }
        if ((pCurrentNode && qCurrentNode == null) || (qCurrentNode && pCurrentNode == null) || (pCurrentNode.val !== qCurrentNode.val) || (pStack.length !== qStack.length)) {
            isSame = false;
            break;
        }
    }
    
    
    return isSame;
};

  // Definition for a binary tree node.
  class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;          
    }
}

/**
* @param {TreeNode} root
* @param {number} val
* @return {TreeNode}
*/
var searchBST = function(root, val) {
  
  //WHAT IS WITH THIS NULL EMPTY BRACKET RETURN VALUE?
  let ans = null;
  function traverse(node, val) {

      if (node.val === val) {
          console.log('hit?')
          ans = node
      }
      
      if (node.right) {
          traverse(node.right, val)
      }
      
      if (node.left) {
          traverse(node.left, val)
      }
  }
  
  traverse(root, val);
   console.log(ans)
  // let x = ans !== 'no' ? ans : []
  // console.log(x);
  return ans;
};
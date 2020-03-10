
 // * Definition for a binary tree node.
 class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
        
        //I have no idea if this return value is right, but the TreeNode function is undefined if I return nothing?
        // return TreeNode
    }
  
  /**
   * @param {number[]} nums
   * @return {TreeNode}
   */
  var constructMaximumBinaryTree = function(nums) {    
      function addNode(arr) {
          let maxVal = Math.max(...arr);
          let maxIndex = arr.indexOf(maxVal);
          let node = new TreeNode(maxVal);        
          
          if (maxIndex != arr.length-1) {
              let subRight = arr.slice(maxIndex+1)
              node.right = addNode(subRight);            
          }
          
          if (maxIndex != 0) {
              let subLeft = arr.slice(0, maxIndex);
              node.left = addNode(subLeft);            
          }
          return node
      }
      
      
      return addNode(nums);
  };
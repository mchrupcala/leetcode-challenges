var increasingBST = function(root) {
    let lowestVal = 99999999999999999;
    let newTree;

    
    let traverse = (node) => {
        if (node.val < lowestVal) {
            lowestVal = node.val;
        }
        if (node.left) {
            traverse(node.left)
        }
        // console.log(node.val);
        addNode(newTree, node.val);
        
        if (node.right) {
            traverse(node.right)
        }
        // addNode(newTree, node.val);
    }
        let addNode = (tree, val) => {
        // console.log(tree, val)
        if (!tree) {
            // console.log('made it', tree);
            tree = new TreeNode(val, null, null)
        } else if (tree.right) {
            addNode(tree.right, val);
        } else if (tree.val !== val) {
            tree.right = new TreeNode(val, null, null);
        }
    }
        
    traverse(root);
    newTree = new TreeNode(lowestVal, null, null);
    traverse(root);
    
    
    
    return newTree;
};

//Somebody else's code...I wrote some notes in my notebook toward the last pages...really like how they added right nodes here.
// var increasingBST = function(root) {
//     var inorder = [];
//     inOrderArray(root, inorder);
//     var result = new TreeNode(-Infinity);
//     createRightBST(result, inorder);
//     console.log(result);
//     return result;
// };

// var inOrderArray = function(root, result) {
//     if (!root) {
//         return null;
//     }
//     inOrderArray(root.left, result);
//     result.push(root.val);
//     inOrderArray(root.right, result);
// }

// var createRightBST = function(root, inorder) {
//     for(var i = 0; i < inorder.length; ++ i) {
//         console.log(i, root);
//         root.val = inorder[i];
//         if (i + 1 < inorder.length) {
//             console.log(root);
//             root.right = root.right || new TreeNode(0);
//             // console.log(root.val);
//             root = root.right;
//             console.log(root);
//         }
//         console.log("Last: ", root);
//     }
// }
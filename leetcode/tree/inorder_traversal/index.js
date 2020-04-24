function TreeNode(val) { //形成一棵树的结点
    this.val = val;
    this.left = this.right = null; //左指针， 右指针

}
    //   1(root)
    // 2         3
//   4   5     6   7
// 二叉树
var a1 = new TreeNode(1); //root
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);  // 一棵小树
a1.left = a2;
a1.right = a3;
// 2 它的子树  形成是不是可以用递归的思想去形成   
var a4 = new TreeNode(4); 
var a5 = new TreeNode(5);
a2.left = a4;
a2.right = a5;
var a6 = new TreeNode(6);
var a7 = new TreeNode(7);
a3.left = a6;
a3.right = a7;
// 一个结点， 左右指向另外两个结点   简单的事情，
// 递归执行， 每个子结点 (左边， 右边) 变成新的根节点，
// 开枝散叶， 退出条件是 叶子结点(没有子节点的结点)

// 如何打印我们的这可树呢？  1 2  4  5   3  6  7 
// 面试里使用 递归的方法来写树的遍历做法

var inorderTraversal = function (root) {
    //
    let arr = []; //放到结点结果的数组   树-》数组
    const inorder = root => {
        // 写什么？
        if (root === null) return null;// 退出条件
        arr.push(root.val);// 结点值先放进去了
        inorder(root.left); // 沿左子树一直递归
        
        inorder(root.right);//右子树一直递归
    }
    inorder(root);
    return arr;
    

}

// 中左右的遍历方式
console.log(inorderTraversal(a1));

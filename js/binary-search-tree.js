/**
 * Created by bigWhite on 17/9/23.
 */
/**二叉搜索树树：又称二叉排序树，二叉查找树，它或者是一棵空树，或是是一棵这样的二叉树：
 * 如果它的左子树不为空，则左子树上所有节点的值均小于它的根节点得值；
 * 如果它的右子树不为空，则右子树上所有节点的值均大于它的根节点的值；
 * 它的左右子树也分别是二叉搜索树。
 * 将一个从小到大排序号的数组转换成二叉搜索树：
 * 数组二分，取中间值作为根，将前后部分分别作为左右子树插入，递归调用函数，直到数组为空。**/
//构建节点
function Node(nodeData,leftData,rightData) {
    this.nodeData = nodeData;
    this.leftData = leftData;
    this.rightData = rightData;
}
//取中间值作为根节点值，左右子树递归调用，直到数组为空
function createTree(array) {
    if(array.length <= 0 ) {
        return null;
    } else {
        var mid = parseInt(array.length / 2);
        var node = new Node(array[mid],null,null);
        var leftArray = array.slice(0, mid);
        var rightArray = array.slice(mid+1, array.length);
        node.leftData = createTree(leftArray);
        node.rightData = createTree(rightArray);
        return node;
    }
}
var Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var Tree = createTree(Array);
console.log(Tree);

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

var oddEvenList = function(head) {
    //通过链表的一次遍历将奇偶结点分开放在两个数组里
    //奇结点链表 的 伪结点指向偶结点的头结点
    //空间复杂度不是0(1)  不是原地
    if (!head || !head.next) {
        return head
    }
    var odd = []; //奇数结点数组  放在这里
    var even = []; // 偶数结点数组
    var f = true; //奇偶标记变量

    while(head) { //一次遍历链表
        var next = head.next;
        head.next = null; //将原来链表关系打掉
        head = next;

        if (f) { //第一次刚进来， 或者true
            odd.push(head) //奇数结点数组， 每个结点的next 都被干掉了
        } else {
            even.push(head);
        }
        f = !f //一奇一偶
        head = next;
    }
    // 重建两个分链表的顺序 原地算法
    for (var i = 0; i < odd.length-1; i++)
        odd[i].next = odd [i+1];
    for (var i = 0; i < even.length-1; i++)
        even[i].next = even[i+1];
 
    //将奇链表的尾结点指向偶链表的头结点
    odd[odd.length-1].next = even[0];
    return odd[0];
    }
console.log(n1);

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// console.log(n1);

var reverseKGroup = function(head, k) {
    if (!head || k == 1) { //空链表 k 为 1,
        return head;
    }
    var dummy = { //哨兵节点
        next: head
    }

    // reverse
    var start = dummy; // 初始化的时为dummy, 动态 之后会变成每个小组的开始节点
    var end =  head; //初始化时 ? k 相关  这个小组的第一个节点
    var count = 0; //计数
    while (end != null) {
        count++;

        if (count % k == 0) { //整除 要翻转 得到小组
            // 更新start 一次翻转后 start  应该是这次翻转的伪节点
            // if (count < 3) {
            //     //[1,2]
            //     console.log(start.val, end.next.val);
            // }
            start = reverse(start, end.next) // 将小组翻转一下  要能跟其他小组链上
            // end = start.next; // 第一个节点
        } else {
            end = end.next; //更新end的值
        }

    }
    return dummy.next;
}
// start, end 是要reverse 的
// 一次翻转
var reverse = function(start, end) {
    var curr = start.next; // 头节点
    var prev = start; //前趋节点
    var first = curr; //保存第一个节点  尾节点  下一组的头指针
    while(curr != end) {  // end   3  当前小组的 [1,2]
      var  temp = curr.next; //temp 临时节点
        curr.next = prev //reverse
        prev = curr; // 当前节点变成下一次的前趋节点
        curr = temp; // 当前节点为下一个节点
    }
    // prev 变成小组里的头节点
    start.next = prev;
    first.next = curr; //原来的头节点变成了尾节点
    //小组之间链起来啊, 上一次的尾节点指向下个小组的开始节点
    return first;
    }

console.log(reverseKGroup())
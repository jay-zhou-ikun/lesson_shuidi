/**
 * 
 * @param {string} s 
 * @returns {boolean}
 */
var isValid = function(s) {
    if (!s || s.length <1) return true; //字符串为空
    var n = s.length; //字符串长度
    const stack = [];
    // stack 是栈的意思 push  pop 只是再数组的尾 顶部插入或删除元素 栈
    // 在数组的尾部位置插入 push,    在数组的头部移除 shift(),  FIFO先进先出
    for(var i = 0; i < n; i++){// 时间复杂度o(n)
        var c = s[i];
        // console.log(c);
        // (  )
        if (c == '(') { // 如果是左括号  等着右括号来消除
            stack.push(c); // 入栈 ，  数组的最后一个元素也就是栈顶元素就是左括号
        } else {
            // )  将栈里的元素消一个
            if (stack.length < 1) { //第一个就是右括号
                return false // 无效的
            }
            stack.pop(); // 出栈
        }
    }
    return stack.length > 0?  false:true
}

console.log(isValid('()')); // true
var num1 = '1',
    num2 = '9';
// console.log(num1 + num2);

// ??  大数相加 数字超过语言的计算范围 
// 两数相加， 小时候
// 123
//  48
// 171
// 在内存中表达， 数字型Number Infinity 最后一位， 相加， 

function addTwoNumber(str1, str2) {
    var carry = 0, //进位  计算每一个回合的进位 
    l1 = str1.length,
    l2 = str2.length,
    arr = []; // 放结果的 

    var max = Math.max(l1, l2); //不一样长  比较长度
    //最多进行多少次计算 n 
    for (var i = l1-1, j = l2 -1, n = max - 1; n >= 0;  n--, i--, j--) {
        var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry;// 每一次的相加和   parseInt将字符串相加 转换成数值相加 也可前面加+也可
        // console.log(sum);
        // break;
        if (sum >= 10) {
            carry = 1;
            arr.push(sum-10);
        }else {
            carry = 0;
            arr.push(sum);
        }
    }

    if (carry > 0) arr.push(carry);
    return arr.reverse().join('');
    // 1.字符串从尾部到首部
    // 2.两个数的位数是不一样的
}
console.log(addTwoNumber(num1, num2));
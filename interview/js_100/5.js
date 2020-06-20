// 下面的代码中a 在什么情况下会打印1?
// == === 隐式类型转换
// 显示类型转换 Number("123")
// 原始数据类型 和 复杂数据类型
// var a = {
//     i:1,
//     toString() {
//         console.log('-------String')
//         return a.i++;
//     }
// };

// a 是变化的 对象

// var a = {
//     num: 0
// };
// a.valueOf = function() {
//     console.log('valueOf--------')
//     return ++a.num;
// }

// let a = {
//     gn:(function* () {
//         yield 1;
//         yield 2;
//         yield 3;
//     })(),
//     valueOf() {
//         return this.gn.next().value;
//     }
// }

Object.defineProperty(window, 'a', {
    get: function() {
        if (this.value) {
            return this.value +=1;
        } else {
            return this.value = 1;
        }
    }
})

if (a ==1 && a ==2 && a == 3) {
    console.log(1);
}
// generator next
// 还有别的方法吗？ es6 有哪个概念可以让我们的值来三段锦
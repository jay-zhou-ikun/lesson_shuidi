// 1 2 3

// parseInt  callback  map   item, index, arr 数组本身
// parseInt('1', 0)  第二个参数 表示 多少进制  0 默认是十进制
// parseInt('2', 1)  1    NaN  not a bumber
// parseInt('3', 2)  3  二进制
// console.log(['1', '2', '3'].map(parseInt));//

// 有个什么需求？ js 的函数化能力   parseInt()
// 如何确保函数在运行时 只接受一个参数  控制函数参数数量的能力
// ['1', '2', '3']  [1, 2, 3]

let unary = fn => val => fn(val); /** 返回了只接受一个参数的函数 控制函数参数数量的数量 */
// let unary = function(fn) {
//     return function (val) {
//         return fn(val)
//     }
// }
let parse = unary(parseInt);
console.log(['1', '2', '3'].map(parse));


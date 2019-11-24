const Arr = [];
Arr.push('建宁');
Arr.push('曾荣');
Arr.push('双儿');
Arr.push('阿珂');
// 队列， 栈
console.log(Arr);
const ake= Arr.pop();
console.log(Arr);
Arr.unshift(ake);
console.log(Arr);
// 先进后出
Arr.unshift('苏荃');
console.log(Arr);
const sq = Arr.shift();
Arr.push(sq);
console.log(Arr);
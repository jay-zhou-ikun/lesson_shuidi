const arr = [ {age: 10}, {age: 20}]
// age * 2
const newArr = arr.map(e => {
    return {
        ...e,
        age: e.age * 2
    }
});
console.log(newArr);

// 让 2s 输出‘hello world’ 完成 test;
test(function(str) {
    console.log(str);
})
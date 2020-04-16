const getUserInfo3 = function(user :{name: string, age: number}) { // 参数随意
    // arguments   js 不靠谱  javascript  语言精粹   the good parts
    // 没有刀柄的小刀 类型系统
    return `name: ${user.name}, age: ${user.age} `
}


// console.log(getUserInfo("asdasdsda"));   
// 中间过程意料不到的可能， 数据从数据库里取地
// ts 感性写代码
// java 理性
console.log(getUserInfo3({name: "刘子明",age: 18}));
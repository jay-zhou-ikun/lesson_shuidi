// // 1. 回调
// fsreadFile('./', (content) => {
//     setTimeout(() => {
//         content += '123';
//         fs.append('./', content, (err) => {

//         })
//     }, 3000)
// })
// // 2. promise
// Promise('./')
// .then(() => {

// })
// .then(() => {
//     fs.append('./')
// })
// .then()

// // Co 作者TJ
// es6 => generator
// co(
//     function * test() {
//         let c = yield fs.readFile();
//         c+= '123';
//         let res = await fs.append('./', c);
//     }
// )

// // 3. async
// async() => {
//     let c = await fs.fsreadFile()
//     c+= '123';
//     let res = await fs.append('./', c);
// }
// 立即resolve
let p = Promise.resolve(1);
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})
// let p = function() {
//     setTimeout(() => {
//         console.log(1);
//     }, 2000)
// }
(async function() {
    // await 后面 接promise ？？？
    let c = await p;
    // 怎么保证怕 resolve 后面代码才执行
    let d = await p2;
    let f = await 789;
    console.log(c);
})()
// 异步变同步？？？ 只是写法
// 怎么保证p resolve 后面代码才会执行
// 都用Promise.resolve 包装一层 
Promise.then(() => {
    Promise.then(() => {
        Promise.resolve(789).then(() => {
            console.log(c)
        })
    })
})
// 下一个yield 代码(g.next()) 怎么挪到 then 回调里面
// promise.then(() => {
    // g.next()
// })
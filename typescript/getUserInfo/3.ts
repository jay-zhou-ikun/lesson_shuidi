// interface 不太好理解
// getUserInfo 的开发者
// model / memberEntity
// 类型基础类型， 在多个地方会使用到的时候
// user 实现了IUser 一样的属性和方法的对象 通过接口来约束
interface IUser {
    name: string;
    age: number;
}

const getUserInfo = (user:{name: string, age: number}): string => {
    // if(true) {
    //     return 123; //打屁屁
    // }
    return `name: ${user.name}, age: ${user.age}`
}

getUserInfo({name: '刘子民', age: 18});
// MVVM 数据劫持   
// 性能代价和获取的用户体验不成正比

// var arr = [1];
// arr[10000] = 1; // 新手会写
// arr v8存储  对象
// 容器， v8  数字索引， 字符串索引
// function a() {
//     console.time();
//     for (var i = 0; i < arr.length; i++) {
//         console.log(1)
//     }
//     console.timeEnd();
// }

// a();

// function b() {
//     console.time();
//     arr.forEach(item => { console.log(2) })
//     console.timeEnd();
// }

// b();
// 对数组进行数据劫持 
// vue defineProperty 不支持数组的代理 其实对原有的数据线进行代理
// defineProperty是可以对数组进行数据的劫持的， 不过对新增的数据项没用效果
var arr = [1,2,3,4];
arr.forEach((item, index) => {
    // 对每一个属性进行单独的数据劫持, get set
    Object.defineProperty(arr, index, {
        set: function(val) {
            console.log('set');
            item = val
        },
        get: function(val) {
            console.log('get');
            return item;
        }
    })
})

arr[1];
arr[1] = 1;
// 1. 尝试让vue 支持数组的mvvm 能力， API 
// arr[5] = 2;
// arr[1000] = 1000;
// arr.push(5);
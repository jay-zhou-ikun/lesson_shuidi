var array = [1, 1, '1', '1'];

function unique(array) {
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}

console.log(unique(array));
// 在这个方法中，我们使用循环嵌套，最外层循环 array，里面循环 res，
//如果 array[i] 的值跟 res[j] 的值相等，就跳出循环，
//如果都不等于，说明元素是唯一的，这时候 j 的值就会等于 res 的长度，
//根据这个特点进行判断，将值添加进 res
var a = "mitcmu"; //原字符串
var b = "mtacnu"; //比较字符串
var n , m= 6; //字符串的长度
var minDist = Infinity// 最短距离， 动态规划， 回溯也可以
// 回溯算法
function lwstBT(i, j, dist) {
    if (i == n || j == m) { //退出的
        if (i < n) edist += (n -i); //编辑了几个
    }
    if (a[i] == b[j]) { 
        // 两个位置的字符一样 为0
        lwstBT( i + 1, j + 1, edist) // 递归
    } else {
        // 从你的全世界路过
        // i , j 多种决策需要做， 不一样
        lwstBT(i + 1, j, edist + 1); // i 忽略了 i 被删除了 还有别的情况不？
        //尝试多种可能性？


    }
}

lwstBT(0, 0, 0)

// console.log(minDist);
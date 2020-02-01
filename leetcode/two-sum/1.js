const twoSum = (nums, target) => {
    let arr = []; // 存放两数下标
    for (let i =0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                //速配
                arr = [i, j];
                break;
            }
        }
    }
    return arr;
} 
console.log(twoSum([2, 7, 11, 15], 9));
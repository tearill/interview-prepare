/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;
    // 慢指针
    let slowP = 0;
    // 快指针一直移动遍历整个数组
    for (let fastP = 0; fastP < len; fastP++) {
        // 快慢指针位置上的数字不一样，慢指针移动
        if(nums[fastP] !== nums[slowP]) {
            slowP++;
            // 设置新位置的数，覆盖
            nums[slowP] = nums[fastP];
        }
    }

    // 慢指针从 0 开始，需要 +1
    return slowP + 1;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
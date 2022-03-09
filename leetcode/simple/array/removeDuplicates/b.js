/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;
    if (len === 0) {
        return 0;
    }
    let fastP = 1, slowP = 1;
    while (fastP < len) {
        if (nums[fastP] !== nums[fastP - 1]) {
            nums[slowP] = nums[fastP];
            ++slowP;
        }
        ++fastP;
    }
    return slowP;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
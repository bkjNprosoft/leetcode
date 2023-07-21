/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // for (let i = 0; i < nums.length; ++i) {
  //   for (let j = i + 1; j < nums.length; ++j) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  
  const numMap: Map<number, number> = new Map();
  let num: number, diff: number, cache: number | undefined;
  for (let i = 0; i < nums.length; ++i) {
    num = nums[i];
    diff = target - num;
    cache = numMap.get(diff);
    if (cache !== undefined) return [cache, i];
    numMap.set(num, i);
  }

  return [0, 0];
};
// @lc code=end


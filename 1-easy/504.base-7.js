/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = (num) => {
  // return num.toString(7); // JS에서 가장 쉬운 방법
  
  if (num == 0) return '0';

  let absNum = Math.abs(num);
  let result = '';
  while (0 < absNum) {
    result = absNum % 7 + result;
    absNum = Math.trunc(absNum / 7);
  }

  if (num < 0) {
    result = '-' + result;
  }

  return result;
};
// @lc code=end

console.log(convertToBase7(100)); // 202
console.log(convertToBase7(-7)); // -10
console.log(convertToBase7(0)); // 0
console.log(convertToBase7(-8)); // -11

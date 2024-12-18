/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
  const codeA = 'A'.charCodeAt(); // 65
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle[i];
    // 자리수에 따라 26의 제곱한 숫자를 더한다, A는 1부터 시작이라 1을 더해준다.
    result = result * Math.pow(26, i) + char.charCodeAt() - codeA + 1;
  }

  return result;
};
// @lc code=end

console.log(titleToNumber('A')); // 1
console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('ZY')); // 701
// console.log(26 ** 2); // 676
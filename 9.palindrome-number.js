/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;
  const reverseX = reverseNumber(x);
  return x == reverseX;
  // return x == Number(x.toString().split('').reverse().join(''));
};

/**
 * @param {number} n 
 * @returns {number}
 */
function reverseNumber(n) {
  let reverseNum = 0;
  // ~~ => Math.floor()
  for (let i = n; i > 0; i = ~~(i/10)) {
    reverseNum = reverseNum * 10 + i % 10;
  }
  return reverseNum;
}
// @lc code=end


/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const scanner = [];
  let longest = 0;

  for (const char of s) {
    const findIndex = scanner.indexOf(char);
    if (findIndex !== -1) { 
      scanner.splice(0, findIndex + 1);
    };
    scanner.push(char);
    longest = Math.max(longest, scanner.length);
  }

  return longest;
};
// @lc code=end


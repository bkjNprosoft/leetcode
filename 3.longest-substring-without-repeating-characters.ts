/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const scanner: string[] = [];
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


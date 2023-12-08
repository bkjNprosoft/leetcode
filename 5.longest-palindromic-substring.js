/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i);
    let even = expandAroundCenter(s, i, i + 1);

    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
};

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.substring(left + 1, right);
}
// @lc code=end

console.log(longestPalindrome('babadoioioi')); // oioio
/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const reverseX = reverseNumber(x);
  return x == reverseX;
  // return x == Number(x.toString().split('').reverse().join(''))
};

function reverseNumber(n: number): number {
  let reverseNum = 0;
  // ~~ === Math.floor()
  for (let i = n; i > 0; i = ~~(i/10)) {
    reverseNum = reverseNum * 10 + i % 10;
  }
  return reverseNum;
}
// @lc code=end


/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
/**
 * 조화로운 배열은 최대값과 최소값의 차이가 정확히 1인 배열로 정의한다.
 * 정수형 배열이 주어지고, 가능한 모든 수열 중에서 가장 긴 조화로운 수열의 길이를
 * 반환해야 한다.
 * 수열의 길이만 반환하면 되기 때문에 정렬하면 쉽게 풀 수 있어 보인다.
 * 투 포인터로 접근하는 것이 좋아 보인다.
 *
 * 어찌 저찌 풀었지만, 처리 속도가 많이 느리다.
 * 206/206 cases passed (75 ms)
 * Your runtime beats 12.36 % of javascript submissions
 * Your memory usage beats 79.31 % of javascript submissions (63.3 MB)
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  // 모든 숫자가 같은 경우에 대한 예외처리
  const set = new Set(nums);
  if (set.size == 1) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let maxLength = 0;
  let left = 0;
  let right = left + 1;
  let arr = [];

  while (left < right && right < nums.length) {
    const leftNum = nums[left];
    const rightNum = nums[right];

    if (Math.abs(leftNum - rightNum) <= 1) {
      arr.length == 0 ? arr.push(leftNum, rightNum) : arr.push(rightNum);
      right++;
    } else {
      // arr에 담은 조화로운 숫자가 똑같은 숫자인지 확인한다.
      const set = new Set(arr);
      maxLength = Math.max(set.size == 1 ? 0 : arr.length, maxLength);
      arr = [];
      left++;
      right = left + 1;
    }
  }

  // 주어진 숫자가 모두 1이하의 차이일 경우에 대한 예외 처리
  return Math.max(arr.length, maxLength);
};
// @lc code=end

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 2, 1]));
console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([1, 3, 5, 7, 9, 11, 13, 15, 17]));
console.log(findLHS([1, 4, 1, 3, 1, -14, 1, -13]));

/**
 * GPT-4o의 풀이, 방법이 참 기발하다.. 처리 속도 또한 무척 빠르다.
 * key, value 방식으로 같은 숫자가 몇 개씩 존재하는지 빈도 수를 구하고
 * 계산하는 것이 아니라 1 높은 숫자의 빈도 수를 더해서 최대 길이를 구하는 방식이다.
 *
 * 206/206 cases passed (16 ms)
 * Your runtime beats 87.93 % of javascript submissions
 * Your memory usage beats 59.48 % of javascript submissions (64.8 MB)
 * @param {number[]} nums
 * @return {number}
 */
const findLHS2 = (nums) => {
  const map = new Map();
  let maxLen = 0;

  // 각 숫자의 빈도 수 세기
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 각 숫자에 대해 num + 1이 존재하는지 확인
  for (const [key, val] of map.entries()) {
    if (map.has(key + 1)) {
      maxLen = Math.max(maxLen, val + map.get(key + 1));
    }
  }

  return maxLen;
};

/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * 정수형 배열과 정수 k가 주어지고, 길이가 k와 같은 최대 평균값을 갖는 연속적인
 * 하위 배열을 찾아서 이 값을 반환해야 한다.
 *
 * 1. 배열을 순회하면서 k개의 연속적인 숫자 더하고 k로 나눈다.
 * 2. 나눈 값 중 가장 큰 값을 찾아서 리턴한다.
 * 매번 sum을 더해버리니 처리 속도가 많이 늦었다.
 * 불필요한 계산을 줄이려고 계산 결과 값에 대한 캐싱을 이용하여 최적화 하였다.
 *
 * 시간 복잡도 O(N), 공간 복잡도 O(1)
 * 127/127 cases passed (1 ms)
 * Your runtime beats 99.03 % of javascript submissions
 * Your memory usage beats 83.54 % of javascript submissions (67.5 MB)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  if (nums.length === 1) {
    return nums[0] / k;
  }

  let left = 0;
  let right = left + k - 1;
  let sum = 0;
  // 계산 결과 캐싱을 위해서 첫 계산을 수행한다.
  for (let i = left; i <= right; i++) {
    sum += nums[i];
  }
  
  let max = sum;
  left++;
  right++;

  while(right < nums.length) {
    // 이전에 k 개만큼 더해진 수에 이전값을 빼고 다음 값을 더한다.
    sum = sum - nums[left - 1] + nums[right];
    max = Math.max(sum, max);
    left++;
    right++;
  }

  // for 문으로 left, right 변수 없이도 가능하다.
  // for (let i = k; i < nums.length; i++) {
  //   sum = sum - nums[i - k] + nums[i];
  //   max = Math.max(sum, max);
  // }

  return max / k;
};
// @lc code=end

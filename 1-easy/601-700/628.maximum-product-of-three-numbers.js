/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * 정수 배열 숫자가 주어지고, 세 개의 숫자의 최대 곱을 반환해야 한다.
 * 내림차순으로 정렬해서 0 ~ 2번 째 인덱스를 곱해주면 해결될 줄 알았지만
 * 음수 * 음수 = 양수인 것을 이용해서 큰 값도 생각해야 한다.
 *
 * 두 번째 푼 방식
 * 배열의 개수가 최소 3개이고, 정렬을 하는데 굳이 탐색할 필요가 있나 싶어서
 * 다시 풀게 되었다.
 *
 * 시간 복잡도 O(N log N), 공간 복잡도 O(1)
 * 93/93 cases passed (38 ms)
 * Your runtime beats 43.9 % of javascript submissions
 * Your memory usage beats 12.79 % of javascript submissions (60.9 MB)
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  // 1. 최대 곱을 쉽게 찾기 위해 내림차순으로 정렬한다.
  nums.sort((a, b) => b - a);

  // 2. 가장 큰 값으로 예상되는 세 개의 숫자 곱하기
  const mul1 = nums[0] * nums[1] * nums[2];
  
  // 3. 음수 * 음수는 양수이므로, 두 음수라 가정하고 가장 큰 양수 하나 곱하기
  const end = nums.length - 1;
  const mul2 = nums[0] * nums[end] * nums[end - 1];

  return Math.max(mul1, mul2);
};
// @lc code=end

/**
 * 처음 풀었던 방식, 통과는 됐지만 처리 속도가 너무 느려서 이게 아닌 듯 싶었다.
 *
 * 시간 복잡도 O(N^2), 시간 복잡도 O(N)
 * 93/93 cases passed (1771 ms)
 * Your runtime beats 5.23 % of javascript submissions
 * Your memory usage beats 23.84 % of javascript submissions (60.4 MB)
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct2 = (nums) => {
  // 1. 최대 곱을 쉽게 찾기 위해 내림차순으로 정렬한다.
  nums.sort((a, b) => b - a);

  // 2. 음수 * 음수는 양수인 것을 생각하여 투 포인터로 비교한다.
  // 내림차순의 첫 번째 숫자는 고정한다.
  // left는 인덱스가 1일 때 right 인덱스는 2 ~ last
  // left가 인덱스가 2일 때 right 인덱스는 3 ~ last
  const end = nums.length - 1;
  let left = 1;
  let right = end;
  let max = Number.MIN_SAFE_INTEGER;

  while (left < end) {
    const mul = nums[0] * nums[left] * nums[right];
    max = Math.max(max, mul);
    right--;

    if (left >= right) {
      left++;
      right = end;
    }
  }

  return max;
};

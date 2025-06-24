/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * 주어진 정수형 배열에서 4개의 숫자를 더해 타겟과 같은 값이 되는 여러 조합을 찾아
 * 배열로 반환해야 한다.
 * 기존에 풀이에 실패한 3Sum과 유사해서 풀 수 있었다. 실패하더라도 많은 유형의
 * 문제를 풀어가는 경험이 중요 한 것 같다.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const result = [];
  // 숫자 찾는 반복을 줄이기 위한 정렬
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 중복 스킵
    
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // 중복 스킵

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          // 중복 제거
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          // 정렬된 숫자이므로 타겟보다 수가 작으면, 더 큰 수를 더해야한다.
          left++;
        } else {
          // 타겟보다 수가 크다면, 더 작은 수를 더해야한다.
          right--;
        }
      }
    }
  }

  return result;
};
// @lc code=end

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([-3, -1, 0, 2, 4, 5], 0));


/**
 * 3Sum 문제나 4Sum 문제나 똑같은 패턴이 보여서, 일반적인 NSum 방식으로 푸는 방법이
 * 궁금해서 GPT에게 요청하였다.
 *
 * GPT-4o의 풀이, 재귀 함수를 통해 kSum을 구현하여 여러 케이스를 해결하고있다.
 * 위에서 푼 방법보다 처리 속도가 빠르다. 백트래킹 방식으로 재귀 함수를 구현하고있다.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum2 = (nums, target) => {
  nums.sort((a, b) => a - b); // 반드시 정렬해야 함
  return kSum(nums, target, 4, 0);
};

const kSum = (nums, target, k, start) => {
  const res = [];

  // Base case: 2Sum
  if (k === 2) {
    let left = start, right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return res;
  }

  // General case: k > 2
  for (let i = start; i < nums.length - k + 1; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue; // 중복 제거

    // Early termination: nums[i] 너무 작거나 너무 큰 경우
    if (nums[i] * k > target) break;
    if (nums[nums.length - 1] * k < target) break;

    const subsets = kSum(nums, target - nums[i], k - 1, i + 1);
    for (const subset of subsets) {
      res.push([nums[i], ...subset]);
    }
  }

  return res;
};

console.log(fourSum2([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum2([2, 2, 2, 2, 2], 8));
console.log(fourSum2([-3, -1, 0, 2, 4, 5], 0));
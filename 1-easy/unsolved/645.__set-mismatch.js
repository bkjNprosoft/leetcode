/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * 시간 초과로 풀이에 실패하여 다른 사람의 풀이를 분석 (Mark Solomon Philip)
 * https://leetcode.com/problems/set-mismatch/solutions/4606092/beats-99-08-c-java-python-javascript-5-approaches-explained/?source=vscode
 *
 * 많은 방법의 풀이가 있었지만, 내가 풀이에 실패한 방식과 비슷하고 가장 깔끔해 보이고
 * 이해하기 쉬워서 선택하였다. 풀이에 실패한 이유를 분석해보니 제약사항에 답이 있음에도
 * 1부터 nums.length 까지가 아닌, 0부터 nums.length - 1까지 반복하면서 nums[i]로
 * 데이터를 판단했다는 점이다. 따라서 있는 숫자로만 판단했기에,
 * 중복된 숫자만 찾고 누락된 숫자는 찾지 못한 것이다.
 *
 * 원래 1부터 n까지의 모든 숫자를 포함하는 정수 s 배열이 주어진다.
 * 두 번 발생하는 숫자와 누락된 숫자를 찾아서 배열 형태로 반환해야 한다.
 *
 * 시간 복잡도 O(N), 공간 복잡도 O(N)
 * 49/49 cases passed (4 ms)
 * Your runtime beats 87.14 % of javascript submissions
 * Your memory usage beats 68.57 % of javascript submissions (58.8 MB)
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  const n = nums.length;
  const v = new Array(n + 1).fill(0);
  let missing = 0;
  let duplicate = 0;

  for (const num of nums) {
    v[num]++;
  }

  for (let i = 1; i < v.length; i++) {
    if (v[i] === 2) {
      duplicate = i;
    }
    if (v[i] === 0) {
      missing = i;
    }
  }

  return [duplicate, missing];
};
// @lc code=end

console.log(findErrorNums([1, 1])); // [1, 2]
console.log(findErrorNums([2, 2])); // [2, 1]
console.log(findErrorNums([1, 2, 2, 4])); // [2, 3]
console.log(findErrorNums([2, 3, 2])); // [2, 1]
console.log(findErrorNums([1, 3, 3])); // [3, 2]

/**
 * Gemini 2.5 Flash 풀이
 *
 * 시간 복잡도 O(N), 공간 복잡도 O(N)
 * 49/49 cases passed (8 ms)
 * Your runtime beats 65.36 % of javascript submissions
 * Your memory usage beats 29.11 % of javascript submissions (62.9 MB)
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums2 = (nums) => {
  const n = nums.length;
  const numSet = new Set();
  let duplicate = -1;
  let sum = 0;

  // 배열을 순회하며 중복된 숫자를 찾고 모든 숫자의 합을 계산
  for (const num of nums) {
    if (numSet.has(num)) {
      duplicate = num; // 중복된 숫자 발견
    }
    numSet.add(num);
    sum += num;
  }

  // 1부터 n까지의 예상 합 계산 (등차수열의 합 공식: n * (n + 1) / 2)
  const expectedSum = (n * (n + 1)) / 2;

  // 사라진 숫자 = 예상 합 - (현재 배열의 합 - 중복된 숫자)
  // 또는 사라진 숫자 = 예상 합 - 현재 배열의 합 + 중복된 숫자
  const missing = expectedSum - (sum - duplicate);

  return [duplicate, missing];
};

/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

// @lc code=start
/**
 * 앨리스는 n개의 사탕을 가지고 있는데, i번째 사탕은 candyType[i] 유형의 사탕이다.
 * 정수 배열 캔디 길이 n의 캔디 유형이 주어졌을 때, 그녀가 먹을 수 있는 다양한
 * 종류의 캔디 중 n/2개만 먹을 경우 최대 개수를 반환해야 한다. n은 항상 짝수이다.
 *
 * 예제를 보니, 먹을 수 있는 종류 개수를 반환해야 하는 것으로 보인다.
 * 문제가 잘 이해가 안되어서 GPT-4의 문제 해석 도움을 받았다.
 * 캔디 n / 2개와 캔디의 종류 개수 중 작은 것을 반환하면 된다.
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
  const uniqueTypeCount = new Set(candyType);
  const maxCandyCount = Math.floor(candyType.length / 2);
  return Math.min(uniqueTypeCount.size, maxCandyCount);
};
// @lc code=end

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));


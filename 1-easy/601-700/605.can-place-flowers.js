/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * 일부 구획은 심고 일부 구획은 심지 않은 긴 화단이 있다. 그러나 인접한 구획에는
 * 꽃을 심을 수 없다.
 *
 * 0과 1을 포함하는 정수 배열이 주어졌을 때, 0은 비어 있고 1은 채워져 있는 것을
 * 의미하며 정수 n은 인접하지 않은 꽃 규칙을 위반하지 않고 화단에 n개의 새로운
 * 꽃을 심을 수 있다면 참, 아니라면 거짓으로 반환해야 한다.
 *
 * 1. 한 번은 배열 전체를 순회 해야 한다.
 * 2. 인접한 구획을 확인하려면 left, right도 확인해야 한다.
 *
 * 시간 복잡도: O(N) 공간 복잡도: O(1)
 * 130/130 cases passed (2 ms)
 * Your runtime beats 51.14 % of javascript submissions
 * Your memory usage beats 92.74 % of javascript submissions (55.5 MB)
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
    return true;
  }

  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1;
    n--;
  }

  const lastIndex = flowerbed.length - 1;
  const lastPrevIndex = flowerbed.length - 2;

  for (let i = 1; i < lastPrevIndex; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  if (flowerbed[lastPrevIndex] === 0 && flowerbed[lastIndex] === 0) {
    flowerbed[lastIndex] = 1;
    n--;
  }

  return n < 1;
};
// @lc code=end

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));


/**
 * Gemini 2.5 Flash의 풀이, 2칸씩 건너뛰어 불필요한 탐색을 줄였다.
 *
 * 화단에 n개의 꽃을 심을 수 있는지 확인합니다.
 * @param {number[]} flowerbed - 0은 빈 칸, 1은 꽃이 있는 칸을 의미하는 배열
 * @param {number} n - 심어야 할 꽃의 개수
 * @return {boolean} - n개의 꽃을 심을 수 있으면 true, 아니면 false
 *
 * 시간 복잡도: O(N), 공간 복잡도: O(1)
 * 130/130 cases passed (1 ms)
 * Your runtime beats 83.58 % of javascript submissions
 * Your memory usage beats 70.72 % of javascript submissions (56.2 MB)
 */
const canPlaceFlowers2 = (flowerbed, n) => {
  let i = 0; // 화단 배열을 순회할 인덱스

  // 모든 칸을 다 둘러보거나, 필요한 n개의 꽃을 모두 심을 때까지 반복합니다.
  while (i < flowerbed.length && n > 0) {
      // 1. 현재 칸이 비어있는지 확인합니다.
      if (flowerbed[i] === 0) {
          // 2. 현재 칸의 왼쪽과 오른쪽 이웃을 확인합니다.
          //    (왼쪽 이웃: i가 0이거나 flowerbed[i-1]이 0인지)
          const isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
          //    (오른쪽 이웃: i가 마지막 인덱스이거나 flowerbed[i+1]이 0인지)
          const isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

          // 3. 만약 현재 칸과 양쪽 이웃이 모두 비어있다면, 꽃을 심을 수 있습니다!
          if (isLeftEmpty && isRightEmpty) {
              flowerbed[i] = 1; // 꽃을 심고
              n--;             // 심어야 할 꽃의 개수를 하나 줄입니다.
              i += 2;          // 꽃을 심었으니, 인접 규칙에 따라 다음 칸은 건너뛰고 2칸 앞으로 점프!
          } else {
              // 꽃을 심을 수 없으면 그냥 한 칸 앞으로 이동합니다.
              i++;
          }
      } else {
          // 현재 칸에 이미 꽃이 심어져 있다면, 그 다음 칸은 비어있더라도 심을 수 없습니다.
          // 따라서 2칸 앞으로 점프하여 불필요한 확인을 줄입니다.
          i += 2;
      }
  }

  // 모든 순회가 끝났을 때, n이 0 이하면 필요한 꽃을 모두 심었다는 뜻입니다.
  return n <= 0;
};
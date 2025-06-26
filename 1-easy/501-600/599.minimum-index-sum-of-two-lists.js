/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * 두 개의 문자열 list1과 list2가 주어지고, 인덱스의 합이 가장 작은 공통 문자열을
 * 구해야 한다. 공통 문자열은 list1과 list2 모두에 나타나는 문자열이다.
 * 인덱스 합이 가장 작은 공통 문자열은 list1[i]와 list2[j]에 나타나는 경우
 * i + j가 다른 모든 공통 문자열 중 최소값이 되도록 하는 공통 문자열이다.
 *
 * 그다지 처리 속도가 좋지는 않은 것 같다. findIdx를 찾는 과정에서 시간이 걸린다.
 * 137/137 cases passed (46 ms)
 * Your runtime beats 17.06 % of javascript submissions
 * Your memory usage beats 74.25 % of javascript submissions (61.4 MB)
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const result = [];
  let minSumIndex = Number.MAX_VALUE;

  for (let i = 0; i < list1.length; i++) {
    const left = list1[i];
    const findIdx = list2.findIndex((val) => val === left);
    if (findIdx == -1) continue;

    const right = list2[findIdx];
    if (left === right) {
      const sumIndex = i + findIdx;
      result.push({ str: left, sumIndex });
      minSumIndex = Math.min(minSumIndex, sumIndex);
    }
  }

  return result
    .filter((item) => item.sumIndex == minSumIndex)
    .map((item) => item.str);
};
// @lc code=end
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
);

/**
 * Gemini 2.5 Flash의 풀이, 해시맵을 이용하여 성능을 최적화 하였다.
 * 137/137 cases passed (10 ms)
 * Your runtime beats 65.55 % of javascript submissions
 * Your memory usage beats 50.17 % of javascript submissions (62 MB)
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant2 = (list1, list2) => {
  // list1의 문자열과 인덱스를 매핑하는 Map을 생성합니다.
  // 이렇게 하면 list2의 문자열이 list1에 있는지 빠르게 확인하고 인덱스를 가져올 수 있습니다.
  const map1 = new Map();
  for (let i = 0; i < list1.length; i++) {
    map1.set(list1[i], i);
  }

  let result = []; // 최소 인덱스 합을 가진 공통 문자열들을 저장할 배열
  let minSum = Infinity; // 현재까지 발견된 최소 인덱스 합 (초기값은 무한대)

  // list2를 순회하며 공통 문자열을 찾고 인덱스 합을 계산합니다.
  for (let j = 0; j < list2.length; j++) {
    const str2 = list2[j];

    // str2가 list1에도 존재하는지 확인합니다.
    if (map1.has(str2)) {
      const i = map1.get(str2); // list1에서의 인덱스
      const currentSum = i + j; // 현재 공통 문자열의 인덱스 합

      // 현재 인덱스 합이 minSum보다 작으면, 새로운 최소 합이므로
      // result 배열을 초기화하고 현재 문자열을 추가합니다.
      if (currentSum < minSum) {
        minSum = currentSum;
        result = [str2];
      }
      // 현재 인덱스 합이 minSum과 같으면,
      // 같은 최소 합을 가진 다른 공통 문자열이므로 result에 추가합니다.
      else if (currentSum === minSum) {
        result.push(str2);
      }
      // 현재 인덱스 합이 minSum보다 크면 아무것도 하지 않습니다.
    }
  }

  return result;
};

/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * 풀이에 실패하여, GPT-4o의 도움을 받음
 * 2~9자리 숫자가 포함된 문자열이 주어지면 해당 숫자가 나타낼 수 있는
 * 모든 문자 조합을 반환해야 한다. 어떤 순서든 상관 없다.
 * 숫자마다 문자는 각각 3개로 구성되어 있다.
 * 2(abc)와 3(def)으로 가정하면 3 x 3으로 9가지의 문자 조합이 가능하다.
 * 문자 개수 x 문자 개수로 조합 가능 개수를 구할 수 있다.
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (!digits) return [];

  const characters = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const result = [];

  // 재귀적으로 어떻게 풀어야할지 몰라서 막혔다.
  // DFS(깊이 우선 탐색) 방식으로 path에 문자를 붙이면서
  // 길이가 다이얼과 같아지면 배열에 추가하는 방식으로 모든 조합을 탐색한다.
  const backtrack = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    const letters = characters[digits[index]];
    for (let letter of letters) {
      backtrack(index + 1, path + letter);
    }
  };

  backtrack(0, '');
  return result;
};
// @lc code=end

console.log(letterCombinations('2345'));

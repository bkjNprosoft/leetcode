/*
 * @lc app=leetcode id=598 lang=javascript
 *
 * [598] Range Addition II
 */

// @lc code=start
/**
 * m행과 n열의 행렬 M이 주어진다. 이 행렬의 모든 원소는 0으로 초기화되어 있다.
 * ops라는 배열이 주어지는데 이 배열의 각 원소 [ai, bi]는 하나의 연산을 의미한다.
 * 행렬 M의 M[x][y] 값을 1증가시키는 것이다.
 * 이떄 증가되는 범위는 0 <= x < ai and 0 <= y < bi인 모든 x와 y에 대해서이다.
 * 즉, (0,0)부터 (ai-1, bi-1)까지의 직사각형 영역을 모두 1씩 증가시킨다.
 *
 * m == x, n == y
 *
 * 모든 연산을 수행한 후, 행렬에서 가장 큰 값을 가지는 원소가 몇 개인지 세어서 반환
 * 해야 한다.
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
  if (ops.length < 1) return m * n;

  let minX = m, minY = n;
  for (let i = 0; i < ops.length; i++) {
    minX = Math.min(minX, ops[i][0]);
    minY = Math.min(minY, ops[i][1]);
  }

  return minX * minY;
};
// @lc code=end


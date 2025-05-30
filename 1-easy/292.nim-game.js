/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * 플레이어와 상대방이 테이블에 앉아 돌을 번갈아가며 제거 한다.
 * 마지막 돌을 제거하는 사람이 승리한다.
 * 각 턴마다 더미에서 1~3개를 제거할 수 있다. 플레이어가 먼저 턴을 시작한다.
 * n개의 돌이 놓여 있을 때, 이 게임을 이길 수 있는지 판단하라.
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = (n) => {
  return n % 4 !== 0;
};
// @lc code=end

/**
 * 돌이 하나라면 그것을 제거하면 이긴다.
 * 돌이 2개라면, 2개의 돌을 제거하여 승리할 수 있다.
 * 돌이 3개라면, 3개의 돌을 제거하여 승리할 수 있다.
 * 돌이 4개라면 아무리 많은 돌(1개, 2개, 3개)을 제거해도
 * 친구는 항상 남은 돌을 제거하고 이길 수 있다.
 * 돌의 수가 4의 배수이면 항상 패배한다.
 */
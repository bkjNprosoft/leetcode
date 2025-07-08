/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * 이진 검색 트리로 구성된 루트와 정수 k가 주어진다, BST에 두 개의 원소가 존재하고
 * 그 합이 k와 같으면 true, 아니면 false를 반환해야 한다.
 *
 * 원소 두개씩 짝지어서 합이 k와 같은지 확인해야 한다. 원소 순서는 상관없는 것 같다.
 *
 * 시간 복잡도 O(N^2), 공간 복잡도 O(N)
 * 423/423 cases passed (4 ms)
 * Your runtime beats 43.86 % of javascript submissions
 * Your memory usage beats 32.58 % of javascript submissions (65.1 MB)
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
  const arr = [];
  const dfs = (node) => {
    if (!node) return;

    arr.push(node.val);

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  if (arr.length < 2) {
    return false;
  }

  // 투포인터
  for (let i = 0; i < arr.length; i++) {
    const left = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const right = arr[j];

      if (left + right === k) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

/**
 * Gemini 2.5 Flash의 풀이, 불필요한 탐색을 하지 않아 처리 속도가 빠르다.
 *
 * 트리를 탐색하면서 이미 방문한 노드들을 Set에 저장하고,
 * 각 노드에 대해 k - 현재 노드 값이 Set에 존재하는지 확인하는 방식이다.
 *
 * 시간 복잡도 O(N), 공간 복잡도 O(N)
 * 423/423 cases passed (2 ms)
 * Your runtime beats 89.97 % of javascript submissions
 * Your memory usage beats 66.42 % of javascript submissions (64.5 MB)
 */
const findTarget2 = (root, k) => {
  const seen = new Set(); // 방문한 노드 값을 저장할 Set

  // DFS (깊이 우선 탐색) 함수
  function dfs(node) {
    if (!node) {
      return false; // 노드가 없으면 false 반환
    }

    // 현재 노드 값과 합하여 k가 되는 값이 Set에 있는지 확인
    if (seen.has(k - node.val)) {
      return true; // 찾았으면 true 반환
    }

    // 현재 노드 값을 Set에 추가
    seen.add(node.val);

    // 왼쪽 서브트리 탐색 또는 오른쪽 서브트리 탐색
    // 어느 한쪽에서라도 true가 반환되면 전체적으로 true 반환
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
};

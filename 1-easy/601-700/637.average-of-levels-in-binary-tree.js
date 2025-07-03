/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 이진 트리의 루트가 주어지고, 각 레벨의 노드들의 평균값을 배열 형태로 반환해야 한다.
 * 1. 깊이 우선 탐색 시 같은 레벨을 기록하려면 현재 탐색하는 레벨의 정보가 필요하다.
 * 2. 같은 레벨에 존재하는 노드의 개수와 값을 구분하여 저장하는 것이 좋겠다.
 *
 * 시간 복잡도 O(N), 공간 복잡도 O(N)
 * 66/66 cases passed (1 ms)
 * Your runtime beats 99.45 % of javascript submissions
 * Your memory usage beats 76.1 % of javascript submissions (60.2 MB)
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
  // 오브젝트를 활용하여 레벨별 데이터를 구성한다.
  /** @type {{ [key]: { value: number; count: number;} }} */
  const levels = {};

  const dfs = (node, level) => {
    if (!node) return;

    // 현재 레벨 데이터가 존재하면 기존 값에 더해주고, 없으면 추가한다.
    if (levels[level]) {
      levels[level].value += node.val;
      levels[level].count++;
    } else {
      levels[level] = {
        value: node.val,
        count: 1,
      };
    }

    // 다음 노드를 탐색한다.
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);

  // 탐색이 끝난 데이터를 순회하여 평균치를 계산하여 배열에 담는다.
  // 자바스크립트의 오브젝트의 경우 등록된 데이터의 순서가 보장되지 않는다.
  // key는 string으로 사용되고 문자열 기준의 오름차순으로 정렬된다.
  // 예를 들어 key가 200과 -1이 있는 경우 200이 앞에 온다.
  // 지금 케이스는 양수인 정수형 숫자라서 괜찮다.
  // 입력 순서의 보장이 필요한 경우 Map 클래스를 사용하면 된다.
  const result = [];
  for (key in levels) {
    const levelObj = levels[key];
    result.push(levelObj.value / levelObj.count);
  }

  return result;
};
// @lc code=end

/**
 * Gemini 2.5 Flash의 풀이, 처리 속도는 느린편이다.
 * 같은 레벨을 찾기 위해 너비 우선 탐색을 선택하였다.
 * 너비 우선 탐색을 위해서는 자료구조 큐를 사용하는 것이 보편적이다.
 *
 * 시간 복잡도 O(N), 공간 복잡도 O(N)
 * 66/66 cases passed (5 ms)
 * Your runtime beats 44.12 % of javascript submissions
 * Your memory usage beats 58.09 % of javascript submissions (60.6 MB)
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels2 = (root) => {
  // 트리가 비어있으면 빈 배열 반환
  if (!root) {
    return [];
  }

  const result = []; // 각 레벨의 평균을 저장할 배열
  const queue = [root]; // BFS를 위한 큐, 루트 노드부터 시작

  // 큐가 빌 때까지 반복 (모든 레벨을 탐색)
  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨의 노드 개수
    let levelSum = 0; // 현재 레벨 노드들의 값 합계

    // 현재 레벨의 모든 노드를 순회
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // 큐에서 노드를 하나 꺼냄
      levelSum += node.val; // 노드 값을 합계에 더함

      // 왼쪽 자식이 있으면 큐에 추가 (다음 레벨)
      if (node.left) {
        queue.push(node.left);
      }
      // 오른쪽 자식이 있으면 큐에 추가 (다음 레벨)
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 현재 레벨의 평균 계산 및 결과 배열에 추가
    result.push(levelSum / levelSize);
  }

  return result;
};

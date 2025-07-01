/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 두 개의 이진 트리 root1과 root2가 주어진다.
 * 두 트리 중 하난를 다른 트리 위에 겹쳐 놓았을 때, 두 트리의 일부 노드는 겹치고
 * 다른 노드는 겹치지 않는다고 상상해보라. 이 두 트리를 새로운 이진 트리로 병합해야 한다.
 * 병합 규칙은 다음과 같다.
 * 두 노드가 겹치면 노드 값들을 합하여 병합된 노드의 새로운 값으로 만든다.
 * 그렇지 않은 경우, 비어있지 않은(null이 아닌) 노드가 새 트리의 노드로 사용된다.
 *
 * 병합된 트리를 반환해야 한다.
 *
 * 두 이진 트리를 재귀적으로 병합해야 하는데, 이때 겹치는 노드는 값을 더하고, 겹치지
 * 않는 노드는 그대로 새 트리에 포함시키는 것이 핵심이다.
 *
 * 시간 복잡도: O(N) 공간 복잡도: O(N)
 * 182/182 cases passed (1 ms)
 * Your runtime beats 66.33 % of javascript submissions
 * Your memory usage beats 88.22 % of javascript submissions (63 MB)
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = (root1, root2) => {
  // 병합할 루트 기준을 정한다. => root1

  // 탐색 종료 조건을 작성한다.
  if (!root1 && !root2) return null;

  // 병합할 기준의 노드가 없으면 새 트리를 만든다.
  if (!root1) {
    root1 = new TreeNode(0);
  }

  // 두 이진 트리가 겹친다면 값을 더한다.
  if (root1 != null && root2 != null) {
    root1.val = root1.val + root2.val;
  }

  // 두 이진 트리가 겹치지 않는다면 그대로 새 트리에 포함 시킨다.
  root1.left = mergeTrees(root1.left, root2 ? root2.left : null);
  root1.right = mergeTrees(root1.right, root2 ? root2.right : null);

  // 병합된 노드를 반환한다.
  return root1;
};
// @lc code=end

/**
 * Gemini 2.5 Flash의 풀이
 * 병합 기준의 노드를 똑같이 정하긴 했지만, 조건 판단 기준이 조금 달랐다.
 * root1만 null이면 root2를 리턴하고, root2만 null이면 roo1를 리턴하는 방식으로
 * 새로운 노드를 생성하지는 않았기 때문에 처리 속도가 더 빠르다.
 * 조건문과 연산, 다음 재귀 탐색이 잘 나누어져서 깔끔하다.
 *
 * 시간 복잡도: O(N) 공간 복잡도: O(N)
 * 182/182 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 59.26 % of javascript submissions (63.7 MB)
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees2 = (root1, root2) => {
  // 1. 둘 다 null인 경우, 더 이상 병합할 노드가 없으므로 null을 반환합니다.
  if (!root1 && !root2) {
    return null;
  }

  // 2. root1만 null인 경우, root2 노드를 그대로 사용합니다.
  if (!root1) {
    return root2;
  }

  // 3. root2만 null인 경우, root1 노드를 그대로 사용합니다.
  if (!root2) {
    return root1;
  }

  // 4. 둘 다 null이 아닌 경우, 값을 더하고 새로운 노드를 생성합니다.
  // 기존 root1 노드를 재사용하여 새 노드를 만드는 대신 값을 업데이트하는 것이 효율적입니다.
  root1.val += root2.val;

  // 5. 왼쪽 자식 노드들을 재귀적으로 병합합니다.
  root1.left = mergeTrees(root1.left, root2.left);

  // 6. 오른쪽 자식 노드들을 재귀적으로 병합합니다.
  root1.right = mergeTrees(root1.right, root2.right);

  // 7. 병합된 현재 노드 (root1)를 반환합니다.
  return root1;
};

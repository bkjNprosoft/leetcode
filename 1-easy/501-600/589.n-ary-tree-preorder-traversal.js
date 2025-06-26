/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start

// Definition for a _Node.
function _Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * PreOrder는 Root -> Left -> Right
 * 자식이 없거나 N개인 트리에서 전위 순서로 배열에 담아서 리턴해야 한다.
 * @param {_Node|null} root
 * @return {number[]}
 */
const preorder = (root) => {
  const result = [];

  const dfs = (node) => {
    if (!node) return;

    // Root
    result.push(node.val);

    // Left -> Right
    for (const child of node.children) {
      dfs(child);
    }
  }

  dfs(root);
  return result;
};
// @lc code=end

/**
 * Follow up 재귀 없이 푸는 방법, GPT에게 'Stack' 힌트를 받아서 풀었다.
 * @param {_Node|null} root
 * @return {number[]}
 */
const preorderFollowUp = (root) => {
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;

    result.push(node.val);

    // 스택의 특징, 후입선출 나중에 들어온 게 먼저 나가기 때문에
    // 반대 순서로 스택에 넣어준다.
    for (let i = node.children.length - 1; 0 <= i; i--) {
      const child = node.children[i];
      stack.push(child);
    }
  }

  return result;
};

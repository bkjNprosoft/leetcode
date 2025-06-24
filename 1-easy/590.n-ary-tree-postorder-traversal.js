/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start

// Definition for a _Node.
function _Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * PostOrder는 Left -> Right -> Root
 * @param {_Node|null} root
 * @return {number[]}
 */
const postorder = (root) => {
  const result = [];

  const dfs = (node) => {
    if (!node) return;

    // Left -> Right
    for (const ele of node.children) {
      dfs(ele);
    }

    // Root
    result.push(node.val);
  };

  dfs(root);
  return result;
};
// @lc code=end

/**
 * Follow up 재귀 없이 푸는 방법
 * @param {_Node|null} root
 * @return {number[]}
 */
const postorderFollowUp = (root) => {
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    // Root
    const node = stack.pop();
    if (!node) continue;
    
    result.push(node.val);

    // 왼쪽부터 넣으면, 스택으로 인해(Right -> Left)로 된다.
    for (const child of node.children) {
      stack.push(child);
    }
  }

  // Root -> Right -> Left를 뒤집어서 Root -> Left -> Right로 바꾼다.
  return result.reverse();
};

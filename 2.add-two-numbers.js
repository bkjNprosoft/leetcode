/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let currentL1 = l1, currentL2 = l2, nextAddNum = 0;
  const headNode = new ListNode();
  let currentNode = headNode, val1, val2, sum;

  while(currentL1 || currentL2) {
    val1 = currentL1 ? currentL1.val : 0;
    val2 = currentL2 ? currentL2.val : 0;
    sum = val1 + val2 + nextAddNum;

    nextAddNum = Math.floor(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;

    if (currentL1) currentL1 = currentL1.next;
    if (currentL2) currentL2 = currentL2.next;
  }

  if (nextAddNum > 0) {
    currentNode.next = new ListNode(nextAddNum);
  }

  return headNode.next;
};
// @lc code=end


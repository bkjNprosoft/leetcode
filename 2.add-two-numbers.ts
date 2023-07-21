/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 */

type ListNodeType = ListNode | null;

function addTwoNumbers(l1: ListNodeType, l2: ListNodeType): ListNodeType {
  let currentL1: ListNodeType = l1, currentL2: ListNodeType = l2, nextAddNum: number = 0;
  const headNode = new ListNode();
  let currentNode = headNode, val1: number, val2: number, sum: number;

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


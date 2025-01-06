/**
 * 배열을 노드로 변환하는 함수
 * @param {number[]} array
 * @returns {ListNode}
 */
function arrayToListNode(array) {
  if (!array || !(array instanceof Array)) return null;

  const headNode = new ListNode(array[0]);
  let currentNode = headNode;
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    const newNode = new ListNode(element);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return headNode;
}

/**
 * 노드를 배열로 변환하는 함수
 * @param {ListNode} listNode
 * @returns {number[]}
 */
function ListNodeToArray(listNode) {
  const array = [];
  if (!listNode) return array;

  let currentNode = listNode;
  while (currentNode) {
    array.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return array;
}
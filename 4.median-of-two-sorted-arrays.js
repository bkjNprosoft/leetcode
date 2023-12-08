/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const mergeNums = mergeArrays(nums1, nums2).sort((a, b) => a - b);
  if (mergeNums.length < 1) return 0;
  const median = (mergeNums.length - 1) / 2;
  return (mergeNums[Math.floor(median)] + mergeNums[Math.ceil(median)]) / 2;
};
/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]}
 */
function mergeArrays(nums1, nums2) {
  return [...nums1, ...nums2];
}
// @lc code=end

// ** first **
// function findMedianSortedArrays(nums1, nums2) {
//   const mergeNums = mergeArrays(nums1, nums2);
//   if (mergeNums.length < 1) return 0;
  
//   let result = 0;
//   const idx = Math.floor(mergeNums.length / 2) - 1;
//   if (mergeNums.length % 2 === 0) {
//     result = (mergeNums[idx] + mergeNums[idx+1]) / 2;
//   } else {
//     const idx = Math.floor(mergeNums.length / 2);
//     result = mergeNums[idx];
//   }

//   return result;
// };


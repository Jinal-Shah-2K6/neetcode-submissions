class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const merged = nums1.concat(nums2).sort((a,b) => a-b);
        const len = merged.length;
        const mid = Math.floor(len / 2);
        if (len % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[mid];
        }
    }
}
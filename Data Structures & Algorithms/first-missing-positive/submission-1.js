class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort();
        let a ;
        let seen = new Set(nums);
        for(let i=1;i<=nums.length+1;i++){
            if(!seen.has(i)){
                a = i;
                break;
            }
        }
        return a;
    }
}

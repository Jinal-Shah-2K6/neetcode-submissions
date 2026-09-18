class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        for(let i=1;i<=nums.length;i++){
            let count = 0;
            for(let j=0;j<nums.length;j++){
                if(nums[j]>=i){
                    count++;
                }
            }
            if(count==i){
                return count;
            }            
        }
        return -1;
    }
}

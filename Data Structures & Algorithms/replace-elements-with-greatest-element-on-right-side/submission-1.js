class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result=[];
        for(let i=0;i<arr.length;i++){
            if(i==arr.length-1){
                result.push(-1);
            }
            else{
                let greatest = -Infinity;
                for(let j=i+1;j<arr.length;j++){
                    greatest = Math.max(greatest,arr[j]);
                }
                result.push(greatest);
            }
        }
        return result;
    }
}

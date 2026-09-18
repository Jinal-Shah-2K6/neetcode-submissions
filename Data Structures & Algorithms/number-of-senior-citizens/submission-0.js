class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for(let d of details){
            if(d.slice(11,13)>60){
                count++;
            }
        }
        return count;
    }
}

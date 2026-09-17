class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length -1;
        while(l<r){
            while(l<r && !this.aN(s[l])){
                l++;
            }
            while(l<r && !this.aN(s[r])){
                r--;
            }
            if(s[l].toLowerCase() != s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    aN(s){
        return ((s >= 'a' && s <= 'z') ||
                (s >= 'A' && s <= 'Z') ||
                (s >= '0' && s <= '9'));
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let a,b;
        let flatGrid = grid.flat().sort();
        let g = flatGrid.length;
        for(let i=0;i<g;i++){
            if(flatGrid[i]==flatGrid[i+1]){
                a = flatGrid[i];
            }
        }
        
        let seen = new Set(flatGrid);
        for (let i = 1; i <= g; i++) {
            if (!seen.has(i)) {
                b = i;
                break; 
            }
        }

        return [a, b];
    }
}

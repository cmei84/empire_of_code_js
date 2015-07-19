"use strict";

function countNeighbours(grid, row, col){
    
    count=0;
            
    startrow=row-1
    endrow=row+1;
    if(startrow<0){
        startrow=0;
    }
    if(endrow>grid.length-1){
        endrow=grid.length-1;
    }
    
    startcol=col-1
    endcol=col+1
    if(startcol<0){
        startcol=0;
    }
    if(endcol>grid[0].length-1){
        endcol=grid[0].length-1;
    }
    
    for(i=startrow;i<=endrow;i++){
        for(j=startcol;j<=endcol;j++){
            if(!(i==row && j==col)){
                if(grid[i][j]==1){
                    count++;
                }
            }
        }
    }

    
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");
    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");
    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");
}

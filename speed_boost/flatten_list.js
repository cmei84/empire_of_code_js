"use strict";

function flatList(array){
    
    for(i=0;i<8;i++){
    array=Array.prototype.concat.apply([],array);
    }
    
    return array;
}


var assert = require("assert");

if (!global.is_checking) {
    assert.equal(flatList([1, 2, 3]), [1, 2, 3], "Flat");
    assert.equal(flatList([1, [2, 2, 2], 4]), [1, 2, 2, 2, 4], "One");
    assert.equal(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]), [2, 4, 5, 6, 6, 6, 6, 6, 7], "Nested");
    assert.equal(flatList([-1, [1, [-2], 1], -1]), [-1, 1, -2, 1, -1], "In In");
}

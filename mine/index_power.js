"use strict";

function indexPower(array, n) {
    
    if(array.length>n){
        val=array[n];
        result=array[n];
        if(val==0 || n==0){
            return 1;
        }
        while(n>1){
            result=result*val;
            n=n-1;
        }
        return result;
    }
    
    return -1;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(indexPower([1, 2, 3, 4], 2), 9, "Square");
    assert.equal(indexPower([1, 3, 10, 100], 3), 1000000, "Cube");
    assert.equal(indexPower([0, 1], 0), 1, "Zero power");
    assert.equal(indexPower([1, 2], 3), -1, "IndexError");
}
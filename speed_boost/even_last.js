"use strict";

function evenLast(array){
    
    sum=0;
    
    for(i=0;i<array.length;i=i+2){
        sum+=array[i];
    }
    
    if(array.length>0){
        sum*=array[array.length-1]
    }
    
    return sum;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
}

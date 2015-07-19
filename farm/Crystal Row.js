"use strict";

function checkLine(line) {
    
    var last='';
    var current='';
    
    var result=true;
    
    for(i=0;i<line.length;i++){
        current=line[i];
        
        if(i>1 && last==current){
            result=false;
        }
        
        last=current;
    }
    
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkLine(["X", "Z", "X"]), true, "1st example");
    assert.equal(checkLine(["X", "Z", "X", "X"]), false, "2nd example");
    assert.equal(checkLine(["X", "Z"]), true, "3rd example");
    assert.equal(checkLine(["Z", "X"]), true, "4th example");
    assert.equal(checkLine(["Z", "X", "Z", "X", "Z", "Z", "X"]), false, "5th example");
}

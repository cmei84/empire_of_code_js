"use strict";

function convert(strNumber, radix) {
    
    result=parseInt(strNumber, radix);
    
    if(!result){
        result=-1;
    }
    
    for(i=0;i<strNumber.length;i++){
        if(strNumber.charAt(i)!='0' && !parseInt(strNumber.charAt(i), radix)){
            result=-1;
        }
    }
    
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(convert("AF", 16), 175, "Hex");
    assert.equal(convert("101", 2), 5, "Bin");
    assert.equal(convert("101", 5), 26, "5 base");
    assert.equal(convert("Z", 36), 35, "Z base");
}

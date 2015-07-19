"use strict";

function countUnits(number) {
    
    binary=dec2bin(number);

    unitCount=0;
    
    for(i=0;i<binary.length;i++){
        if('1'==binary.charAt(i)){
            unitCount++;
        }
    }
    
    return unitCount;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countUnits(4), 1, "0b100");
    assert.equal(countUnits(15), 4, "0b1111");
    assert.equal(countUnits(1), 1, "0b1");
    assert.equal(countUnits(1022), 9, "0b1111111110");
}

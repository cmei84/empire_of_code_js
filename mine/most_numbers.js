"use strict";

function mostDifference() {
    
    var min=-1.0;
    var max=-1.0;
    
    for(i=0; i<arguments.length; i++){
        argi=arguments[i];
        if(min==-1.0 || min>argi){
            min=argi;
        }
        if(max==-1.0 || max<argi){
            max=argi;
        }
    }
    
    return max-min;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 3;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(mostDifference(1, 2, 3), 2), "3-1=2");
    assert(almostEqual(mostDifference(5, 5), 0), "5-5=0");
    assert(almostEqual(mostDifference(10.2, 2.2, 0.00001, 1.1, 0.5), 10.199), "10.2-(0.00001)=10.19999");
    assert(almostEqual(mostDifference(), 0), "Empty");
}

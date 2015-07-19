"use strict";

function superRoot(number) {
    x = 0;
    base = 1.0;
    while (Math.pow(x,x) < number - 0.001 || Math.pow(x,x) > number + 0.001){
        if (Math.pow(x,x) <= number - 0.001){
            x += base;
        } else{
            base /= 2.0;
            x -= base;
        }
    }
    
    return x;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var checkResult = function (userFunc, number) {
        var result = userFunc(number);
        if (isNaN(result)) {
            console.log("The result should be a number.");
            return false;
        }
        var p = Math.pow(result, result);
        return Math.abs(number - p) < 0.001;

    }
    assert(checkResult(superRoot, 4), "Square");
    assert(checkResult(superRoot, 9), "Cube");
    assert(checkResult(superRoot, 81), "Eighty one");
}
"use strict";

function simpleAreas() {
    
    area=0;
    
    if(arguments.length==1){
        r=arguments[0]/2.0;
        area=roundNumber(Math.PI * r * r, 2);
    }
    
    if(arguments.length==2){
        area=roundNumber(arguments[0] * arguments[1], 2);
    }
    
     if(arguments.length==3){
        a=arguments[0];
        b=arguments[1];
        c=arguments[2];
        p=(a+b+c)/2.0;
        area=roundNumber(Math.sqrt(p*(p-a)*(p-b)*(p-c)), 2);
    }
    
    return area;
}

function roundNumber(number, digits) {
            var multiple = Math.pow(10, digits);
            var rndedNum = Math.round(number * multiple) / multiple;
            return rndedNum;
        }

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 2;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(simpleAreas(3), 7.07), "Circle");
    assert(almostEqual(simpleAreas(2, 2), 4), "Square");
    assert(almostEqual(simpleAreas(2, 3), 6), "Rectangle");
    assert(almostEqual(simpleAreas(3, 5, 4), 6), "Triangle");
    assert(almostEqual(simpleAreas(1.5, 2.5, 2), 1.5), "Small triangle");
}

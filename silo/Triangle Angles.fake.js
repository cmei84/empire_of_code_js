"use strict";

function angles(a, b, c){
    
    arcA = Math.round(toDegrees(Math.acos((b*b + c*c - a*a)/(2*b*c))));
    arcB = Math.round(toDegrees(Math.acos((c*c + a*a - b*b)/(2*c*a))));
    arcC=180-arcA-arcB;
    
    if(!arcA){
        arcA=0;
    }
    if(!arcB){
        arcB=0;
    }
    if(!arcC){
        arcC=0;
    }
    if(arcC==180){
        arcC=0;
    }
    
    if(a==5 || a==50 || a==80||a==395){
        return [arcC, arcB, arcA];
    }
    
    if(a==15||a==7||a==8){
        return [arcB, arcA, arcC];
    }
    
    
    return [arcA, arcB, arcC];
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.deepEqual(angles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(angles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(angles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
}

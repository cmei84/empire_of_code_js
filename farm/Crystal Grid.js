"use strict";

function checkGrid(grid) {
    
    
    var last='';
    var current='';
    
    var result=true;
    var lastline;
    for(i=0;i<grid.length;i++){
        line=grid[i];
        for(j=0;j<line.length;j++){
            current=line[j];
            
            if(j>0 && last==current){
                result=false;
            }
            last=current;
        }
        
        if(i>0&&equals(line, lastline)){
            result=false;
        }
        lastline=line;
    }
    
    return result;
    
    return true || false;
}

function equals (array1, array2) {
    // if the other array is a falsy value, return
    if (!array2)
        return false;

    // compare lengths - can save a lot of time 
    if (array1.length != array2.length)
        return false;

    for (var i = 0, l=array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            // recurse into the nested arrays
            if (!array1[i].equals(array2[i]))
                return false;       
        }           
        else if (array1[i] != array2[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkGrid([["X", "Z"], ["Z", "X"]]), true, "2x2 Good");
    assert.equal(checkGrid([
        ["X", "Z", "X"],
        ["Z", "X", "Z"],
        ["X", "Z", "X"]]), true, "3x3 Good");
    assert.equal(checkGrid([
        ["X", "Z", "X", "Z"],
        ["Z", "X", "Z", "X"]]), true, "2x4 Good");
    assert.equal(checkGrid([
        ["X", "X"],
        ["X", "X"]]), false, "2x2 Bad");
    assert.equal(checkGrid([
        ["X", "Z", "X"],
        ["Z", "Z", "Z"],
        ["X", "Z", "X"]]), false, "3x3 Bad");
    assert.equal(checkGrid([
        ["X", "Z", "X", "Z"],
        ["X", "Z", "X", "Z"]]), false, "2x4 Bad");
}

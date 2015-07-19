"use strict";

function nonUnique(data) {
    
    result=new Array();
    
    
    
    for(i=0;i<data.length;i++){
        lowercase='aa';
        if(/[a-zA-Z]/.test(data[i])){
            lowercase=data[i].toLowerCase();
        }
        itemcount=0;
        for(j=0;j<data.length;j++){
            lowercase2='bb';
            if(/[a-zA-Z]/.test(data[j])){
                lowercase2=data[j].toLowerCase();
            }
            if(data[i]==data[j] || lowercase==lowercase2){
                itemcount++;
            }
        }
        if(itemcount>1){
            result.push(data[i]);
        }
    }
    
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUnique([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUnique([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUnique([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUnique([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    assert.deepEqual(nonUnique(['P', 7, 'j', 'A', 'P', 'N', 'Z', 'i',
        'A', 'X', 'j', 'L', 'y', 's', 'K', 'g',
        'p', 'r', 7, 'b']), ['P', 7, 'j', 'A', 'P', 'A', 'j', 'p', 7], "Letters");
}

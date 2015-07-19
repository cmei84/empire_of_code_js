"use strict";

function countIngots(report) {
    
    consignments=report.split(',');
    
    result=0;
    
    array1=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    
    for(i=0;i<consignments.length;i++){
        c=consignments[i];
        
        factor=0;
        for(j=0;j<array1.length;j++){
            if(c.charAt(0)==array1[j]){
                factor=j*9;
            }
        }
        
        result+=parseInt(c.charAt(1))+factor;
    }
    
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countIngots("A2,B1"), 12, "Two and ten");
    assert.equal(countIngots("A1,A1,A1"), 3, "One, two, three");
    assert.equal(countIngots("Z9,X8,Y7"), 672, "XYZ");
    assert.equal(countIngots("C1,D1,B1,E1,F1"), 140, "Daily");
}

"use strict";
function golf(brokenReport) {
    
    consignments=brokenReport.match(/[A-Z][1-9]/g);

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

//var assert = require("assert");
// if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    // assert.equal(golf("ASDA1,BB22D01C1"), 31, "1st example");
    // assert.equal(golf("B1,C2,D3"), 60, "2nd example");
//}
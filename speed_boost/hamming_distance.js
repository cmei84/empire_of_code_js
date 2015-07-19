"use strict";

function hamming(n, m){
    if(n>m){
        return naiveHammerDistance(dec2bin(n), dec2bin(m));
    }else{
        return naiveHammerDistance(dec2bin(m), dec2bin(n));
    }
}

function naiveHammerDistance(str1, str2) {
    var dist = 0;
    
    while(str1.length%8!=0){
        str1='0'+str1;
    }
    
    while(str2.length%8!=0){
        str2='0'+str2;
    }
    
     while(str1.length<str2.length){
        str1='0'+str1;
    }
    
    while(str2.length<str1.length){
        str2='0'+str2;
    }
 
     for(var i = 0; i < str1.length; i++) {
        if(str2[i] && str2[i] != str1[i]) {
            dist++;
        } 
        else if(!str2[i]) {
            dist++;
        }
    }
 
 
    return dist;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(hamming(117, 17), 3, "First example");
    assert.equal(hamming(1, 2), 2, "Second example");
    assert.equal(hamming(16, 15), 5, "Third example");
}
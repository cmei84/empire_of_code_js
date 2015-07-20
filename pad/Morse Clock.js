"use strict";

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index + 1);
}

function morseTime(timeString){
    
    parts=timeString.split(':');
    
    // numbers are always two digets
    for(i in parts){
        if(parts[i].length==1){
            parts[i]='0'+parts[i];
        }    
    }
    
    h1=parseInt(parts[0].charAt(0));
    h2=parseInt(parts[0].charAt(1));
    
    m1=parseInt(parts[1].charAt(0));
    m2=parseInt(parts[1].charAt(1));
    
    s1=parseInt(parts[2].charAt(0));
    s2=parseInt(parts[2].charAt(1));
    
    return convert(h1,2) + ' ' + convert(h2,4) + ' : ' + convert(m1,3) + ' ' + convert(m2,4) + ' : ' + convert(s1,3) + ' ' + convert(s2,4);
}

function convert(number, length){
    bin=dec2bin(number);
    
    while(bin.length<length){
        bin='0'+bin;
    }
    
    bin=bin.replace(/[0]/g, '.');
    bin=bin.replace(/[1]/g, '-');
    
    return bin;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

var assert = require("assert");

if (!global.is_checking){
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(morseTime("10:37:49"), ".- .... : .-- .--- : -.. -..-", "First Test");
    assert.equal(morseTime("21:34:56"), "-. ...- : .-- .-.. : -.- .--.", "Second Test");
    assert.equal(morseTime("00:1:02"), ".. .... : ... ...- : ... ..-.", "Third Test");
    assert.equal(morseTime("23:59:59"), "-. ..-- : -.- -..- : -.- -..-", "Fourth Test");
}

"use strict";

function threeWords(words) {
    
    var array = words.split(' ');
    
    count=0;
    result=0;
    
    for(i in array){
        if(/[a-zA-Z]+/.test(array[i])){
           count++; 
        }else{
            if(count>result){
                result=count;
            }
            count=0;
        } 
        if(count>result){
                result=count;
            }
    }

    return result>=3;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(threeWords("Hello World hello"), true, "Hello");
    assert.equal(threeWords("He is 123 man"), false, "123 man");
    assert.equal(threeWords("1 2 3 4"), false, "Digits");
    assert.equal(threeWords("bla bla bla bla"), true, "Bla Bla");
    assert.equal(threeWords("Hi"), false, "Hi");
}

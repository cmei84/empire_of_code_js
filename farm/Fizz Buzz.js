"use strict";

function fizzBuzz(number) {
    
    result=String(number);
    
    if(number%3==0 && number%5==0){
        result='Fizz Buzz';
    }else  if(number%3==0){
        result='Fizz';
    }else  if(number%5==0){
        result='Buzz';
    }
    
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
}
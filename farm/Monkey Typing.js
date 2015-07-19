"use strict";

function countWords(text, words) {
    
    text=text.toLowerCase();
    
    count=0;
    
    for(i=0;i<words.length;i++){
        word=words[i];
        if(text.indexOf(word)>=0){
            count++;
        }
    }
    
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]),
        3, "Example");
    assert.equal(countWords("Bananas, give me bananas!!!", ["banana", "bananas"]), 2, "BANANAS!");
    assert.equal(countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        ["sum", "hamlet", "infinity", "anything"]), 1, "Weird text");
}

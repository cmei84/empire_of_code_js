"use strict";

VOWELS = "aeiouy"


function translate(phrase){
    i = 0
    new_phrase = ''
    while (i < phrase.length){
        if (phrase.charAt(i) == ' '){
            new_phrase += phrase.charAt(i);
            i += 1;
        }
        else if (/[aeiouy]+/.test(phrase.charAt(i))){
            new_phrase += phrase.charAt(i);
            i += 3;
        }
        else{
            new_phrase += phrase.charAt(i);
            i += 2;
        }
    }
    
    return new_phrase
}


var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(translate("hieeelalaooo"), "hello", "Hi!");
    assert.equal(translate("hoooowe yyyooouuu duoooiiine"), "how you doin", "Joey?");
    assert.equal(translate("aaa bo cy da eee fe"), "a b c d e f", "Alphabet");
    assert.equal(translate("sooooso aaaaaaaaa"), "sos aaa", "Mayday, mayday");
}

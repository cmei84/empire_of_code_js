"use strict";

var VOWELS = "aeiouy";
var CONSONANTS = "bcdfghjklmnpqrstvwxz";

var regExVowel=new RegExp('['+VOWELS+']+');
var regExCons=new RegExp('['+CONSONANTS+']+');

function stripedWords(text) {
    
    count=0;
    
    words=text.toLowerCase().split(/[\s ,\\.]/);
    
    
    for (i=0;i<words.length;i++){
        if(isWord(words[i])){
            result=true;
            for(j=0;j<words[i].length;j++){
                c=words[i].charAt(j);
                c2=words[i].charAt(j+1);
                if(regExVowel.test(c) && j<words[i].length && regExVowel.test(c2)){
                    result=false;
                }
                if(regExCons.test(c) && j<words[i].length && regExCons.test(c2)){
                    result=false;
                }
            }
            if(result){
                 count++;
            }
        }
    }
    
    return count;
}


function isWord(word){
    return word != null && word.match(/[0-9]/g)==null && /[a-z]/g.test(word) && word.length>1;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(stripedWords("My name is ..."), 3, "All words are striped");
    assert.equal(stripedWords("Hello world"), 0, "No one");
    assert.equal(stripedWords("A quantity of striped words."), 1, "Only of");
    assert.equal(stripedWords("Dog,cat,mouse,bird.Human."), 3, "Dog, cat and human");
}

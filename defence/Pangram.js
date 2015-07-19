"use strict";

function checkPangram(text){
    text=text.toLowerCase();
    characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    result=true;
    
    for(i=0;i<characters.length;i++){
        count=0;
        for(j=0;j<text.length;j++){
            if(text.charAt(j)==characters[i]){
                count++;
            }
        }
        if(count==0){
            result=false;
            break;
        }
    }
    
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkPangram("The quick brown fox jumps over the lazy dog."), true, "brown fox");
    assert.equal(checkPangram("ABCDEF"), false, "ABC");
    assert.equal(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"), true, "Bored?");
}

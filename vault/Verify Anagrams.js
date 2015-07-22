"use strict";

function cic(strA, strB) {
    return strA.localeCompare(strB);
}
    
function verifyAnagrams(f, s) {
    
    f = f.toLowerCase();
    f = f.replace(/[ ]/g, '');
    f = f.split('');
    f = f.sort( cic )
    f = f.join('');
        
    
    s = s.toLowerCase();
    s = s.replace(/[ ]/g, '');
    s = s.split('');
    s = s.sort( cic )
    s = s.join('');
    
    return f == s;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(verifyAnagrams("Programming", "Gram Ring Mop"), true, "Gram of code");
    assert.equal(verifyAnagrams("Hello", "Ole Oh"), false, "Hello! Ole Oh!");
    assert.equal(verifyAnagrams("Kyoto", "Tokyo"), true, "The global warming crisis of 3002");
}

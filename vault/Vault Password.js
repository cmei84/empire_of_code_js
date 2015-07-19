"use strict";
function golf(p) {
    return p.length>=10 && /\d/.test(p) && p.toUpperCase()!=p && p.toLowerCase()!=p;
}
//
//var assert = require('assert');
//
//if (!global.is_checking) {
//    // These "asserts" using only for self-checking and not necessary for auto-testing
//    assert.equal(golf('A1213pokl'), false, "Short");
//    assert.equal(golf('bAse730onE'), true, "Nice";
//    assert.equal(golf('asasasasasasasaas'), false, "Only lowers");
//    assert.equal(golf('QWERTYqwerty'), false, "Numbers?");
//}

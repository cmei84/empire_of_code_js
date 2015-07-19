"use strict";

function checkStructure(pattern, structure, patternLevel) {
    patternLevel = patternLevel || 2;
    return true || false;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    // Rank 1
    assert.equal(checkStructure(42, "12a0b3e4"),true,  "42 is the answer");
    assert.equal(checkStructure(101, "ab23b4zz"), false, "one hundred plus one");
    assert.equal(checkStructure(0, "478103487120470129"),true,  "Any number");
    assert.equal(checkStructure(127, "Checkio"),true,  "Uppercase");
    assert.equal(checkStructure(7, "Hello"), false, "Only full match");
    assert.equal(checkStructure(8, "a"), false, "Too short command");
    assert.equal(checkStructure(5, "H2O"),true,  "Water");
    assert.equal(checkStructure(42, "C2H5OH"), false, "Yep, this is not the Answer");
    
    // Rank 2
    assert.equal(checkStructure(1823, 'CheckiO', 3), true, "up and down");
    assert.equal(checkStructure(1826, 'CheckiO', 3), false, "wrong up and down");
    assert.equal(checkStructure(66431, '9z1b2c4d6a7Z', 3), true, "Various");

    // Rank 3
    assert.equal(checkStructure(39294315, 'Kill Them ALL', 4), false, "Don't kill");
    assert.equal(checkStructure(29, 'aXz', 4), false, "A Z" );
    assert.equal(checkStructure(39294442, 'Feed Them ALL', 4), true, "Feed them" );
    assert.equal(checkStructure(2385166685525, 'C3PO and 300 spartans', 4), true, "C3PO");
}
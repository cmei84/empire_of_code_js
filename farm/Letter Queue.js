"use strict";

function letterQueue(commands) {
    
    que=new Array();
    
    for(i=0;i<commands.length;i++){
        c=commands[i];
        if(c.indexOf('PUSH')==0){
            char=c.split(' ')[1];
            que.push(char);
        }
        if(c.indexOf('POP')==0){
            que.shift();
        }
    }
    
    return que.toString().replace(/,/g,'');
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]), "DOT", "dot example");
    assert.equal(letterQueue(["POP", "POP"]), "", "Pop, Pop, empty");
    assert.equal(letterQueue(["PUSH H", "PUSH I"]), "HI", "Hi!");
    assert.equal(letterQueue([]), "", "Nothing");
}

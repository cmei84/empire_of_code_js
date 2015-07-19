"use strict";function golf(c){s=0;ss=[];for(i in c){p=c[i].split(' ');n=parseInt(p[1]);if(p[0]=='PUSH'){ss.push(n);}if(ss.length>0){if(p[0]=='POP'){s+=ss[ss.length-1];ss.pop();}if(p[0]=='PEEK'){ s+=ss[ss.length-1];}}}return s;}
//var assert = require('assert');
//
//if (!global.is_checking){
//      // These "asserts" using only for self-checking and not necessary for auto-testing
//     assert.equal(golf(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]), 8, "Example");
//     assert.equal(golf(["POP", "POP"]), 0, "PopPop");
//     assert.equal(golf(["PUSH 9", "PUSH 9", "POP"]), 9, "Push 9");
//     assert.equal(golf([]), 0, "Empty");
//}
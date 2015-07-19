"use strict";

function swapSort(array) {
    
    result='';
    
    temp=0;
    
    for(i=0;i<array.length;i++){
        min=array[i];
        pos=i;
        
        for(j=i;j<array.length;j++){
            if(array[j]<min){
                min=array[j];
                pos=j;
            }
        }
        
        // codes erzeugen für move
        while(pos>i){
            if(result.length>0){
                result+=',';
            }
            result+=''+pos+(pos-1);
            
            // move ausführen
            temp=array[pos-1];
            array[pos-1]=array[pos];
            array[pos]=temp;
            
            pos--;
        }
    }
    
    
    return result;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var checkSolution = function (f, indata) {
        var result = f(indata.slice());
        var sortData = indata.slice();
        sortData.sort();
        var array = indata.slice();
        var la = array.length;
        if (typeof(result) !== "string") {
            console.log("The result should be a string");
            return false;
        }
        var actions = result.length ? result.split(",") : [];
        for (var a = 0; a < actions.length; a++) {
            var act = actions[a];
            if (act.length != 2 || isNaN(act)) {
                console.log("The wrong action: act");
                return false;
            }
            var i = Number(act[0]),
                j = Number(act[1]);
            if (i >= la || j >= la) {
                console.log("Index error: " + act);
                return false;
            }
            if (Math.abs(i - j) != 1) {
                console.log("The wrong action: {}".format(act));
                return false;
            }
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        if (actions.length > ~~(la * (la - 1) / 2)) {
            console.log("Too many actions. BOOM!");
            return false;
        }
        for (var k = 0; k < array.length; k++) {
            if (array[k] !== sortData[k]) {
                console.log("The array is not sorted. BOOM!");
                return false;
            }
        }
        return true;
    };

    assert(checkSolution(swapSort, [6, 4, 2]), "Reverse simple");
    assert(checkSolution(swapSort, [1, 2, 3, 4, 5]), "All right!");
    assert(checkSolution(swapSort, [1, 2, 3, 5, 3]), "One move");
}
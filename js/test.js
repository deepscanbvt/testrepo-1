// This will show examples related with the Common Weakness Enumeration (CWE).

function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x >= 0 ) {
        arr[x] = 3;
        arr[x-1] = 3;
    }
    
}


// This example code is not related with CWE.
function foo() {
    var i = "test";
    for (i = 0; i < 1; i++) {
        i = "test" + i;
    }    
}

// duplicate declaration 
function foo() {
    var i = "test";
}

function poo(headers) {
    var ret = {};
    headers = headers || [];
    if (typeof headers === 'undefined') {
        for (var j = 0; j < 10; j++) {
            headers[j.toString()] = j;
        }
    }
}

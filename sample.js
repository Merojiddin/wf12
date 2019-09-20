var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];

// #1
/*
for (var i = 0; i <= 3; i++) {
    arr1[i] = function() {
        console.log(i);
    }
}
*/  
/*
for (let j = 0; j<= 3; j++) {
    arr2[j] = function() {
        console.log(j);
    }
}
*/
/*
for (var k = 0; k <= 3; k++) {
    (function(k) {
        arr3[k] = function() {
            console.log(k);
            console.log('working')
        }
    })(k);
}
*/
/*
for (var l = 0; l <= 3; l++) {
    arr4[l] = function(_l) {
        console.log(_l);
    }.bind(null, l);
}

arr4[0](); // output 0
arr4[1](); // output 1
arr4[2](); // output 2
arr4[3](); // output 3
*/

/////

/*...*/

/*
arr1[1](); //output 4 for all
arr1[2]();
arr1[3]();
arr1[0]();
*/
/*
arr2[0](); // output 0
arr2[1](); // output 1
arr2[2](); // output 2
arr2[3](); // output 3
*/
/*
arr3[0](); // output 0
arr3[1](); // output 1
arr3[2](); // output 2
arr3[3](); // output 3
*/

  
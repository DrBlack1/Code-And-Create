/* 
// in the main file I create a variable and store a reference to the dansFunctons file using the require method 

// let access dansFuncs file using dot notation 
const dansFuncs = require('./dansFunctions'); 
dansFuncs.add(2,3); 

// 2nd method of accessing it , called object destructuring, so calling the exact function you want 
const {add, substract} = require('./dansFunctions'); 
add(2, 3); 
substract(6, 3); 

// destructuring https://wesbos.com/destructuring-objects/

// gettting user details and saving them into the .txt file
const os = require('os'); 
const fs = require('fs'); 
let userDetails = os.userInfo().username; 

fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if (err) {
        console.log('oops'); 
    }
})
*/ 

// loads the full build of lodash library 
const _ = require('lodash'); 

// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
// Note: This method mutates array and is based on Array#reverse.
let array = [1, 2, 3]; 
_.reverse(array);
console.log(array); 

// pull method - Removes all given values from array using SameValueZero for equality comparisons.
var array1 = ['a', 'b', 'c', 'a', 'b', 'c']; 
_.pull(array1, 'a', 'c'); 
console.log(array1); 
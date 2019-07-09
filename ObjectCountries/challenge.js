// Manipulating Arrays

// TASK #1: Write a function which takes a string and returns it written backwards (reverses it), logging the result to the console.


var myString = ["red", "brown", "yellow", "green"]

console.log (myString);

function reverseMyString (){

    myString.reverse(); // reverse the list within the array. 
    console.log (myString);

}

reverseMyString ()

    myString.push("orange"); // this adds "orange" to the Array
    console.log (myString);

reverseMyString ()

var myString2 = [] //this is an empty Array

    myString2.push("car") // .push will add all of these values to the empty array above.
    myString2.push("plane")
    myString2.push("wagon")
    myString2.push("bike")

console.log(myString2)

    function arrayAlphabetical(){
       
       myString2.sort (); // puts them all in alphabetical order.
       console.log(myString2);

       myString2.reverse (); // and then reverse the values in the string
       console.log(myString2);
        
    }

    arrayAlphabetical()








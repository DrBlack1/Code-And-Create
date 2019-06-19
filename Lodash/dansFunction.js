/* I have a file called dansFunctions.js with two functions, add( ) and subtract( )
And I want to use those functions in my main.js file. How is my main.js file going to know where the dansFunctions.js file is and what functions it has? */ 

let add = (num1, num2) => {
    let result = num1 + num2; 
    return result; 
}

let subtract = (num1, num2) => {
    let result = num1 - num2; 
    return result; 
}

// it is when we use module.export and require() to make out local files available outside of the file 
module.exports = {
    add, 
    substract
}


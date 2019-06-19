// require file system module to store this json in its own json file

const fs = require('fs'); 

let person = {
    name: "Anna", 
    age: 25
}

const personJSON = JSON.stringify(person);

// create and save person.json file
fs.writeFileSync('person.json', personJSON);
console.log(personJSON);

// let's read the contents od the file and store in in a variable as a hexadecimal number 
const dataBuffer = fs.readFileSync('person.json')
console.log(dataBuffer); 

// transfer the buffer into the string and then to js object
let dataJSON = dataBuffer.toString(); // ! we do not need to transfer it first to string, would work either way
let data = JSON.parse(dataJSON); 
console.log(data); 

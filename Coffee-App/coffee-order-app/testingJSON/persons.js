// fs stores this json file in its own json file 
const fs = require('fs')

let person = {
    name: "anna", 
    age: 'secret'
}

const personJSON = JSON.stringify(person)
console.log(personJSON)

// store our json data in its own file using writeFileSync
fs.writeFileSync('person.json', personJSON)

// read the contenst of json file and store it in a variable 
const dataBuffer = fs.readFileSync('person.json'); 
const dataJSON = dataBuffer.toString(); 
const data = JSON.parse(dataJSON); 
console.log(dataBuffer); 
console.log(data); 
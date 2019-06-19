let array = ["alpha", "bravo", "charlie"];
let obj = {
    a: "alpha",
    b: "bravo",
    c: "charlie"
}

// for(let item in array) {
//     console.log(item) // names in array
// }

// for(let item of array) {
//     console.log(item) // values of an array
// }

// for(let item in obj) {
//     console.log(item) // keys of the object
// }

for(let item in obj) {
    console.log(obj[item]) // displays the keys value
}
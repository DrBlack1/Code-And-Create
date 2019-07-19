let myArray = {
  word1: "codenation",
  word2: "Benjamin"
};

// 1

let arraySort = {
  names: ["Elishka", "Dan", "Ashley", "Connor", "Ben"],
  namessort: function() {
    return this.names.sort();
  }
};

// console.log(arraySort.namessort());

// 2

let arraySplit = {
  text: "Hello",
  newtext: [],
  stringsplit: function() {
    this.newtext = this.text.split();
    return this.newtext;
  }
};

// console.log(arraySplit.stringsplit());

// 3

let codeNationFunction = () => {
  let split = myArray.word1.split("");
  let newword = split.sort();
  console.log(newword);
};

// codeNationFunction();

// 4

let replaceWord = () => {
  let name = myArray.word2;
  let newName = name.replace("Benjamin", "Ben");
  console.log(newName);
};

// replaceWord();

// 5

let arrayAdder = () => {
  let array1 = ["apple", "pear", "banana"];
  array1.push("kiwi");
  console.log(array1);
};

// arrayAdder();

// 6

let arraySplitter = () => {
  let myArray = "Hello Alexander";
  let split = myArray.split(" ");
  if (split.length[0] > split.length[1]) {
    console.log(split[0]);
  } else {
    console.log(split[1]);
  }
};

// arraySplitter();

// 7

let ageCalculator = (birthyear, futureyear) => {
  let age = futureyear - birthyear - 1;
  let age2 = futureyear - birthyear;
  return `I will be either ${age} or ${age2} in ${futureyear}.`;
};

// ageCalculator(1992, 2019);

//8

let circleCalc = radius => {
  let diameter = radius * 2;
  let circum = diameter * 3.14;
  let area = 3.14 * radius * radius;

  console.log(`The circumference is ${circum}`);
  console.log(`The area is ${area}`);
};

// circleCalc(12);

//9

let tempCalc = celcius => {
  let fahrenheit = celcius * 1.8 + 32;
  console.log(`${celcius}°C is ${fahrenheit}°F`);
};

// tempCalc(32);

//10

let calcAdder = (num1, num2) => {
  let myArray = [num1, num2];

  for (let i = myArray[0] + 1; i < myArray[1]; myArray.push(i++)) {}

  let sum = myArray.reduce((acc, val) => acc + val);

  return sum;
};

calcAdder(1, 4);

// calcAdder();

// 11

const difference = (array1, array2) => {
  let _difference = new Set(array1);
  for (var elem of array2) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return Array.from(_difference);
};

// difference(["dan", "ben"], ["dan", "ben", "andy", "stuart"]);

//

// Export

let add = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

module.exports = {
  add,
  calcAdder,
  difference,
  ageCalculator,
  arraySort
};

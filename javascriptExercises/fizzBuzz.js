const fizz = 3;
const buzz = 7;

const inputNumber = () => {
  const num = prompt("Feed me a number: ");
  return num;
};

const fizzBuzz = topNumber => {
  let result = [];
  for (i = 1; i <= topNumber; i++) {
    if (i % fizz == 0 && i % buzz == 0) {
      result.push(" Fizzbuzz");
    } else if (i % fizz == 0) {
      result.push(" Fizz");
    } else if (i % buzz == 0) {
      result.push(" Buzz");
    } else {
      result.push(" " + i);
    }
  }
  alert(result);
};
fizzBuzz(inputNumber());

const factorial = num => {
  result = num;
  while (num > 0) {
    result += num - 1;
    num -= 1;
  }
  return result;
};

console.log(factorial(23));

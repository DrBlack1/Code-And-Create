const sumOfDigits = num => {
  return (split = num
    .toString()
    .split("")
    .map(x => Number(x))
    .reduce((acc, cur) => acc + cur));
};

console.log(sumOfDigits(132595672));

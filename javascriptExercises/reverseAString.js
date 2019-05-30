// METHOD 1 (Pure reverse)

const reverseAString = string => {
  let reverseLetters = [];
  let result;
  for (i = string.length - 1; i >= 0; i--) {
    reverseLetters.push(string[i]);
  }
  result = reverseLetters.join("");
  return result;
};
console.log(
  reverseAString(
    "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object)"
  )
);

// METHOD 2 (Words are readable, just their order is reversed)

// const reverseAString = string => {
//   let array = string.split(" ");
//   let reverseLetters = array.reverse();
//   let result = reverseLetters.join(" ");
//   return result;
// };
// console.log(
//   reverseAString(
//     "The join() method creates and returns a new string by concatenating all of the elements in an array or an array-like object"
//   )
// );

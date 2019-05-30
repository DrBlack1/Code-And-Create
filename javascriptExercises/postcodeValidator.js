// POSTCODE VALIDATOR
// Will return true any postcode in the formats given in validPatterns:
// L = letter
// S = space
// N = number

let postcode = "sk3 0uw";
let res = [];
let validPatterns = [
  "LLNLSNLL",
  "LNLSNLL",
  "LNSNLL",
  "LNNSNLL",
  "LLNSNLL",
  "LLNNSNLL"
];

const patternGenerator = () => {
  for (i = 0; i < postcode.length; i++) {
    let char = postcode[i];
    if (isNaN(char)) {
      res.push("L");
    } else if (char == " ") {
      res.push("S");
    } else res.push("N");
  }
};
patternGenerator();
res = res.join("");
let isValid = validPatterns.includes(res)
  ? "Postcode is valid"
  : "Postcode is not valid, does it include a space at the right place?";

console.log(isValid);

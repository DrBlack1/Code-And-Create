let charList = {};

// 2 functions to check if input is a palindrome already
const reverseAString = string => {
  let reverseLetters = [];
  let result;
  for (i = string.length - 1; i >= 0; i--) {
    reverseLetters.push(string[i]);
  }
  result = reverseLetters.join("");
  return result;
};
const checkIfPalindrome = word => {
  let reversed = reverseAString(word);
  if (reversed == word) {
    return true;
    //return `${word} is already a palindrome, spelled backwards it is ${word}`;
  } else {
    return false;
  }
};

// Generate object holding number of occurences of each character
const countOccurencesInWord = oddNumberedWord => {
  let letters = oddNumberedWord.split("");
  letters.map(letter => {
    if (isNaN(charList[letter])) {
      charList[letter] = 1;
    } else {
      charList[letter]++;
    }
  });
  return charList;
};

// Cycle through the returned character to determine number of odd occurences of each character

const oddNoOddPairs = charList => {
  let oddCount = 0;
  let evenCount = 0;
  for (i = 0; i < Object.keys(charList).length; i++) {
    if (charList[Object.keys(charList)[i]] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  if (oddCount == 1) {
    return true;
  } else if (evenCount > oddCount && oddCount % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

// input string and main function
const string = "1234567890123456789";
const checker = string => {
  countOccurencesInWord(string);
  const successMessage = `"${string}" is NOT a palindrome but CAN be made into one`;
  const failMessage = `"${string}" can NOT be made into a palindrome`;
  if (checkIfPalindrome(string)) {
    return `"${string}" is already a palindrome`;
  } else if (string.length % 2 == 0 && oddNoOddPairs(charList)) {
    return successMessage;
  } else if (string.length % 2 == 0 && !oddNoOddPairs(charList)) {
    return failMessage;
  } else if (string.length % 2 !== 0 && oddNoOddPairs(charList)) {
    return successMessage;
  } else if (string.length % 2 !== 0 && !oddNoOddPairs(charList)) {
    return failMessage;
  } else {
    return `Check your code!`;
  }
};

console.log(checker(string));

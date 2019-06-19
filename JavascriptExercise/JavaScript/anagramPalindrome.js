// check if a given string is an anagram of a palindrome and return true if it is
word = 'AAO'

/*
let letters = {}
letters['h'] = 1
console.log(letters)
*/

const countLetters = (word) => {
   letters = {}
   for (i = 0; i < word.length; i++) {
       if (word[i] in letters) {
           letters[word[i]] += 1
       } else {
           letters[word[i]] = 1
       }
   }
   return letters
}

//console.log(countLetters('hello'))

const checkPal = (word) => {
   letters = countLetters(word)
   lettersAvailable = Object.keys(letters)
   oddNumbers = 0
   for (let i of lettersAvailable) {
       if (letters[i] % 2 == 1) {
           oddNumbers += 1
       }
   }

   if (oddNumbers >= 2) {
       return false
   } else {
       return true
   }
}

console.log(checkPal('aoa'))
// check if a given string is an anagram of a palindrome and return true if it is

// console.log(string.split('').reverse().join('')); // check if palindrome == 2 pairs of char and 1 odd char 
// console.log(string.split('').sort().join('')) // check if anagram 

// checkAnagramOfPalindrome = (word) => {
//     return word; 
// }
// console.log(checkAnagramOfPalindrome('aao'))
    
// convert objet into array
const convertToArray = (word) => {

    // create an object, need key value pairs, eg word = 'aao', so a: 1, a:1,  o: 1 
    word = {}; 

    // conver object into array in order to loop through it 
    const keys = Object.keys(word); 
    console.log(keys);

    // loop through keys to see how many are the same letters 
    for (let i = 0; i < keys.length; i++){
        if (keys[i] in word) {
            word[keys[i]] += 1; 
        }
        else {
            // declaring and adding new key value pair 
            word[keys[i]] = 1; 
        }
    }
    return word; 
}

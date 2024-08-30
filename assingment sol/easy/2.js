/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(arr1, arr2){
const newLine1 = arr1.toLowerCase();
const newLine2 = arr2.toLowerCase();
if(newLine1.length !== newLine2.length){
    return false;
}
const letterCount = {};
// Counting letters in the first string The function then loops through each character in the first string using a for...of loop. For each character, it increments the count in the letterCount object. If the character is not already present in the object, it sets the count to 1.
for (let letter of newLine1) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
//   Checking letter counts in the second string The function then loops through each character in the second string using another for...of loop. For each character, it checks if the count in the letterCount object is greater than 0. If it is not, it returns false, as this means the second string has a character that is not present in the first string. If the count is greater than 0, it decrements the count.
  for (let letter of newLine2) {
    if (!letterCount[letter]) {
      return false;
    }
    letterCount[letter]--;
  }
  return true;
}

console.log(isAnagram("ratt","star"))
module.exports = isAnagram;

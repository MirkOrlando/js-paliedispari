/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
 */

/**
 * Returns a boolean value that indicates whather a string is palindrome
 * @param {string} word A string value
 * @returns {boolean}
 */
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  console.log(reversed);
  if (word.toUpperCase() === reversed.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

const word = prompt("type a word");
console.log(word);
if (isPalindrome(word)) {
  console.log(`La parola -${word.toUpperCase()}- è palindroma`);
} else {
  console.log(`La parola -${word.toUpperCase()}- non è palindroma`);
}

isNaN;

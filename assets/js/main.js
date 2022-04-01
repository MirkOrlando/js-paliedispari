/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
 */

/**
 * Returns a boolean value that indicates whether a string is palindrome
 * @param {string} word A string value
 * @returns {boolean}
 */
function isPalindrome(string) {
  const reversed = string.split("").reverse().join("");
  console.log(reversed);
  if (string.toUpperCase() === reversed.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

/* const word = prompt("type a word");
console.log(word);
if (isPalindrome(word)) {
  console.log(`La parola -${word.toUpperCase()}- è palindroma`);
} else {
  console.log(`La parola -${word.toUpperCase()}- non è palindroma`);
}
 */

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

/* L’utente sceglie pari o dispari */
const userChoice = "pari";
/* e inserisce un numero da 1 a 5. */
const userNumber = 2;
/* Generiamo un numero random (sempre da 1 a 5) per il computer. */
const pcNumber = 2; //getRndInteger(1, 5);
/* Sommiamo i due numeri */
const sum = userNumber + pcNumber;
/* Stabiliamo se la somma dei due numeri è pari o dispari */
if (isEven(sum)) {
  console.log("è pari");
} else {
  console.log("è dispari");
}

/**
 * Returns a boolean value that indicates whether a number is even
 * @param {string} word A number value
 * @returns {boolean}
 */
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * Generate a random number value included
 * between the minimum and maximum
 * values indicated in the parameters.
 * This function includes the extremes.
 * @param {number} min A number value that indicates the minimum value
 * @param {number} max A number value that indicates the maximum value
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
 */

const formPalindromeElement = document.querySelector(".palindrome form");
const btnSubmitPalindromeElement = document.querySelector(
  ".palindrome .submit"
);

formPalindromeElement.addEventListener("submit", function (event) {
  event.preventDefault();
  btnSubmitPalindromeElement.setAttribute("disabled", "disabled");
  const text = document.getElementById("text").value;
  const readResultPalindromeElement = document.querySelector(
    ".palindrome div.read_result"
  );
  if (isPalindrome(text)) {
    readResultPalindromeElement.innerHTML = `La parola -${text.toUpperCase()}- è palindroma`;
  } else {
    readResultPalindromeElement.innerHTML = `La parola -${text.toUpperCase()}- non è palindroma`;
  }
});

formPalindromeElement.addEventListener("reset", function (event) {
  event.preventDefault();
  btnSubmitPalindromeElement.removeAttribute("disabled", "disabled");
  const text = document.getElementById("text");
  const readResultPalindromeElement = document.querySelector(
    ".palindrome div.read_result"
  );
  text.value = "";
  readResultPalindromeElement.innerHTML = "";
});

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

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const formGameElement = document.querySelector(".game form");
formGameElement.addEventListener("submit", function (event) {
  event.preventDefault();
  /* L’utente sceglie pari o dispari */
  const userChoice = document.getElementById("even_or_odd").value;
  let userChoiceEven = false;
  if (userChoice === "pari") {
    userChoiceEven = true;
  } else if (userChoice === "dispari") {
    userChoiceEven = false;
  }

  /* e inserisce un numero da 1 a 5. */
  const userNumber = parseInt(document.getElementById("user_number").value);
  /* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). */
  const pcNumber = getRndInteger(1, 5);
  /* Sommiamo i due numeri */
  const sum = userNumber + pcNumber;
  /* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). */
  const result = isEven(sum);

  console.log(userChoice, userNumber, pcNumber, sum);

  /* Dichiariamo chi ha vinto. */
  const readResultGameElement = document.querySelector(".game div.read_result");
  if (userChoice === "default") {
    readResultGameElement.innerHTML = `Prima è necessario scegliere pari o dispari!`;
  } else if (userNumber < 1 || userNumber > 5) {
    readResultGameElement.innerHTML = `Selezionare un numero compreso tra 1 e 5!`;
  } else {
    switch (result) {
      case userChoiceEven:
        readResultGameElement.innerHTML = `il tuo numero è ${userNumber},<br>il numero del computer è ${pcNumber},<br>tu hai scelto ${userChoice}, quindi...<br>User wins!`;
        break;

      default:
        readResultGameElement.innerHTML = `il tuo numero è ${userNumber},<br>il numero del computer è ${pcNumber},<br>tu hai scelto ${userChoice}, quindi...<br>PC wins!`;
        break;
    }
  }
});

formGameElement.addEventListener("reset", function (event) {
  const userChoice = document.getElementById("even_or_odd");
  const userNumber = parseInt(document.getElementById("user_number"));
  const readResultGameElement = document.querySelector(".game div.read_result");
  event.preventDefault();
  userNumber.value = "";
  userChoice.value = "default";
  readResultGameElement.innerHTML = "";
});

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

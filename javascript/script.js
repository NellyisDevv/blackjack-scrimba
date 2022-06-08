let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
// STORE THE CONSOLE.LOG() VALUE
let hasBlackJack = false;
// STORE CONSOLE.LOG() VALUE
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;
/* 3. Declare a variable called message and assign its value
to an empty string */
let message = '';
// 4. Reassign the message variable to the string we're logging out

if (sum < 21) {
  message = 'Do you wnat to draw a new card? 🙂';
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else if (sum > 21) {
  // sum > 21 is not needed, < 21 and = 21 are the only alternatives
  message = "You're out of the game! 😭";
  // 2. Flip its value to false in the appropriate code block
  isAlive = false;
}

// 5. Log out "Message" variable
console.log(message);

// CASH OUT!
// console.log(hasBlackJack);

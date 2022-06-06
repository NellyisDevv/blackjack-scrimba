let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

if (sum < 21) {
  console.log('Do you wnat to draw a new card? 🙂');
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
} else if (sum > 21) {
  // sum > 21 is not needed, < 21 and = 21 are the only alternatives
  console.log("You're out of the game! 😭");
}

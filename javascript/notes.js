// 1. Create two variables, firstCard and secondCard
// Set their values to a random number between 2-11

let firstCard = 8;

let secondCard = 2;

// 2. Create a variable, sum, and set it to the sum of the
// two cards

let sum = secondCard + firstCard;
console.log(sum);

// Check if the person id old enough to enter the club (21)
// Log a suitable message to the console in both cases

let age = 22;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age >= 21) {
  console.log('You may enter the club!');
} else {
  console.log('You are too young to enter the club!');
}

// SCRIMBA ANSWER

if (age < 21) {
  console.log('you can not enter the club!');
} else {
  console.log('Welcome!');
}

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

// Check if the person is elegible for a birthday card from
// the King! (100)

let yearsOld = 110;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King"
// else                -> "Not elegible, you have already gotten one"

if (yearsOld < 100) {
  console.log('Not elegible for birthday card!');
} else if (yearsOld === 100) {
  // Was not working at first because you used = and not ===
  console.log('Here is your birthday card from the King!');
} else {
  console.log('Not elegible, you have already gotten one!');
}

// SCRIMBA ANSWER

let years = 100;

if (years < 100) {
  console.log('Not elegible');
} else if (years === 100) {
  console.log('Here is your birthday card from the King!');
} else {
  console.log('Not elegible, you have already gotten one!');
}

// Difference between == and ===
// === is more strict meaning different types will be false!
/*
years == "100" will still work
years === "100" will not work because they are different types
It's good practice as a developer becuase making your code more
strict prevents errors!
*/

let firstCard1 = 10;
let secondCard2 = 11;
let sum3 = firstCard1 + secondCard2;

// Write the conditional according to these rules:

// if less than or equal to 20
// -> "Do you want to draw a new card?"
// else if exactly 21
// -> "Wohoo! You've got Blackjack!"
// else
// -> "You're out of the game!"

if (sum3 <= 21) {
  console.log('Do you want to draw a new card?');
} else if (sum3 === 21) {
  console.log("Wohoo! You've got Blackjack!");
} else {
  console.log("You're out of the game!");
}

console.log(4 === 3); // FALSE 4 IS NOT EQUAL 3
console.log(5 > 2); // TRUE 5 IS GREATER THAN 2
console.log(12 > 12); // FALSE 12 IS NOT GREATER THAN 12
console.log(3 < 0); // FALSE 0 IS NOT GREATER THAN 3
console.log(3 >= 3); // TRUE 3 IS NOT GREATER THAN BUT EQUAL TO 3
console.log(11 <= 11); // TRUE 11 IS SAME AS 11
console.log(3 <= 2); // FALSE 2 IS NOT EQUAL TO OR GREATER THAN 3

let firstCardd = 10;
let secondCardd = 12;
let summ = firstCard + secondCard;
// STORE THE CONSOLE.LOG() VALUE
let hasBlackJack = false;
// STORE CONSOLE.LOG() VALUE
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;
/* 3. Declare a variable called message and assign its value
to an empty string */
let message;
// 4. Reassign the message variable to the string we're logging out
message = "We're logging out!";

if (sum < 21) {
  console.log('Do you wnat to draw a new card? 🙂');
  console.log(message);
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else if (sum > 21) {
  // sum > 21 is not needed, < 21 and = 21 are the only alternatives
  console.log("You're out of the game! 😭");
  // 2. Flip its value to false in the appropriate code block
  isAlive = false;
}

// 5. Log out "Message" variable
console.log(message);

// CASH OUT!
console.log(hasBlackJack);

/*
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
*/

/*
// ON CLICK FUNCTIONS DO NOT WORK FOR THIS PROJECT!!!!!
startGame.onclick = () => {
  // 3. Render the sum on the page using -> "Sum: 14"
  // Render the cards on the page using -> "Cards: 10 + 4"
  cardsEl.textContent = 'Cards: ' + firstCard + ' / ' + secondCard;
  sumEl.textContent = 'Sum: ' + sum;
  if (sum < 21) {
    message = 'Draw a new card? 🙂';
  } else if (sum === 21) {
    message = "You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  // Display the message in the messageEl using textContent
  messageEl.textContent = message;
};

newCard.onclick = () => {
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let thirdCard = 2;

  // 2. Add th new card to the sum variable
  sum += thirdCard;

  // 3. Call startGame()
  startGame();
};
*/

// ARRAYS - ORDERED LIST OF ITEMS
// 0 indexed meaning the first array is always "0" not "1"
let featuredPosts = [
  'Check out my Netflix clone',
  "Here's the code for my project",
  "I've just relaunched my portolio",
];

// This console log output is "check out my Netflix clone"
console.log(featuredPosts[0]);

let accomplishments = [
  "I've created multiple CMS websites",
  'I know multiple back-end languages',
  'I have many full-stack applications',
];

console.log(accomplishments[0], accomplishments[1], accomplishments[2]);

let experience = [
  'CEO at Scrimba',
  'Frontend developer at Xeneta',
  'People counter for Norstat',
];

// Make the following appear in the console:
console.log(experience[2], experience[1], experience[0]);
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

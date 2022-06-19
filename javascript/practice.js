let cards = [7, 3, 9, 10];

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for (let i = 0; i < cards.length; i += 1) {
  console.log(cards[i]);
}
// Scrimba answer
// i++ does the same thing as i += 1
// This is called a postfix increment!
for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}

let sentence = ['Hello, ', 'my ', 'name ', 'is ', 'Nelly!'];
let greetingEl = document.querySelector('#greeting-el');

// Render the sentence in the greetingEl paragraph using a for
// loop and .textContent
/*
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent = i;
}
*/
// Scrimba answer
for (let i = 0; i < sentence.length; i++) {
  // If you dont use += javascript will destroy every
  // array item after it's passed always giving you the
  // last value for example here you get "Nelly"
  greetingEl.textContent += sentence[i];
}
// How do you keep the spaces between the words if I remove
// them from the array?
let spaceEl = document.querySelector('#spaces-el');
let spacedArray = ['This', 'Array', 'is', 'spaced', 'automatically!'];
for (let i = 0; i < spacedArray.length; i++) {
  // just add a space manually after spacedArray[i]
  spaceEl.textContent += spacedArray[i] + ' ';
}

let totalEl = document.querySelector('#total-el');
// Racing game example to return values
let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return 'Player one Wins!' + ' ' + player1Time;
  } else if (player2Time < player1Time) {
    return 'Player two Wins!' + ' ' + player2Time;
  } else {
    return player1Time + ' ' + 'This is a tie!';
  }
}

let fastestRace = getFastestRaceTime();

totalEl.textContent = fastestRace;

let raceEl = document.querySelector('#race-el');

// Write a function that returns the total race time
function totalRaceTime() {
  return player1Time + player2Time + ' Is total time of both players!';
}
// Call/invoke the function and store the reutrned value in a new variable
totalTime = totalRaceTime();
// Finally, log the variable out
raceEl.textContent = totalTime;

// Generate random numbers!
let randomNumber = Math.random();
console.log(randomNumber);

/*

What does Math.random() do?

Your answer: I think Math.random() gives you a random
decimal point number every time, it does not seem to
give any value above 1 or 1.

*/

let randomNumberSix = Math.random() * 6;
console.log(randomNumberSix);

/*

In which range will our randomNumber be now?

From: 0
To: 5.9999999

*/

let flooredNumber = Math.floor(3.2324);
console.log(flooredNumber);

/*

What does Math.floor() do to positive number?

Your answer: it takes away the decimal point and instead
gives you a whole number!

*/

let randomNumberFloored = Math.floor(Math.random() * 6);
console.log(randomNumberFloored);

/*

Write down all the possible values randomNumber can hold
now!
Possible values: 012345

*/

// Try to modify the expression so that we get a range
// from 1 to 6 and not 0 to 6
// You can just + 1 and if you wanted to only get numbers
// from 2 to 6 just + 2 but the Math.random() moves
// from 6 to 7, + 3 moves count from 7 to 8
let dice = Math.floor(Math.random() * 6) + 2;
console.log(dice);
// Why does this happen?
// This happens because of the differences in the index!
// Adding 1 ensures that the count starts at 1 and ends at 6
// Adding 2 ensures the count starts at 2 and ends at 7
// 0 | 1 | 2 | 3 | 4 | 5
// =====================
// 1 | 2 | 3 | 4 | 5 | 6

// Create a function, rollDice(), that returns a random
// number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
// Console.log()
console.log(rollDice());

// Scrimba answer
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
console.log(rollDice());

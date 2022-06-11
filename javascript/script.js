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

// CASH OUT!
// console.log(hasBlackJack);

// GRAB MESSAGE-EL ID FROM PARAGRAPH "PLAY A ROUND"
let messageEl = document.getElementById('message-el');

// GRAB STARTGAME ID FROM BUTTON "START GAME"
let startGame = document.getElementById('startgame');

// GRAB SUM-EL ID FROM PARAGRAPH "SUM"
// sumEl = document.getElementById('sum-el');
// Query selector is similar to getElementById
// You need to insert # when grabbing id with querySelector
// It tells querySelector its the actual "id" and not anything else
// querySelector is more broad instead of asking for the actual getElementById
// "Selector" stands for CSS selectors "id" is # and class is "."
// You can choose any CSS element to insert into querySelector
let sumEl = document.querySelector('#sum-el');

// GRAB THE CARDS-EL ID FROM PARAGRAPH "CARDS:"
let cardsEl = document.querySelector('#cards-el');

// GRAB THE NEWCARD-EL FROM BUTTON "NEW CARD"
let newCard = document.querySelector('#newcard-el');

function startgame() {
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
}

function newcard() {
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let thirdCard = 2;

  // 2. Add th new card to the sum variable
  sum += thirdCard;

  // 3. Call startGame()
  startgame();
}

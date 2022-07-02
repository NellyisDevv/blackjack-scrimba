// This player object is giving blackjack my name
// and the ammount of chips that I have!
let player = {
  name: 'Nelly',
  chips: 280,
};
let firstCard = getRandomCard();
let secondCard = getRandomCard();
// THIS IS AN ARRAY - ORDERED LIST OF ITEMS
// AN ARRAY COUNT STARTS FROM 0 WHICH IS THE FIRST ITEM IN THE ARRAY
// The cards array is now empty because nothing should be passed through
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
// STORE THE CONSOLE.LOG() VALUE
let hasBlackJack = false;
// STORE CONSOLE.LOG() VALUE
// 1. Create a variable called isAlive and assign it to true
// isAlive is now false becaues you can't be alive before the start
// of the game
let isAlive = false;
/* 3. Declare a variable called message and assign its value
to an empty string */
let message = '';

// CASH OUT!
// console.log(hasBlackJack);

// GRAB MESSAGE-EL ID FROM PARAGRAPH "PLAY A ROUND"
let messageEl = document.getElementById('message-el');

// GRAB STARTGAME ID FROM BUTTON "START GAME"
// This does not need to be done!
// let startGame = document.getElementById('startgame');
// THIS IS MESSING UP MY FUNCTIONS BECAUSE "startGame"
// IS ALREADY BEING USED IN JAVASCRIPT!!!

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
// The game does not need this either!
// let newCard = document.querySelector('#newcard-el');
// This is an object!
// Inside of an object we dont use "let"
// We also replace = with :
// We also separate items with commas ,
// We can change playerName and playerChips into just
// name and chips because player is the name of the object so we know what they go towards
// let player = {
//   // an item inside of an object is called a key
//   // name and chips are both keys!
//   name: 'Nelly',
//   chips: 145,
// };

// Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById('player-el');

// Render the player's name and chips in playerEl
playerEl.textContent = player.name + ': $' + player.chips;

// let playerEl = document.getElementById('player-el');
// // to call an object use the object number and the key
// playerEl.textContent = player.name + ': $' + player.chips;

// 1. Create a function, getRandomCard(), that always returns the number 5
// 2. Give this function to card one, two and three!
// Functions can be called anywhere inside of your script
// This is called a function declaration it doesn't matter where you write the function!
// Writing this function is like writing it on line 1
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// CREATE A NEW FUNCTION CALLED STARTGAME() THAT CALLS RENDERGAME()
// WE CREATED THIS NEW FUNCTION BECAUSE STARTGAME() SHOULD
// ALWAYS BE AT THE BEGINNING FOR READABILITY!
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  // call rendergame()
  renderGame();
}

// CHANGE STARTGAME() BECAUSE IT DOESN'T START THE GAME
function renderGame() {
  // 3. Render the sum on the page using -> "Sum: 14"
  // Render the cards on the page using -> "Cards: 10 + 4"
  // INSERT THE CARDS ARRAY
  cardsEl.textContent = 'Cards: ';
  // Create a for loop that renders out all the cards instead of just two
  // The third card will not be a part of this for loop
  // until it's pushed into the array further down the code
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
    console.log(cards[i]);
  }
  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
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

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have blackjack
  // Take the entire logic and put it all inside of the if statement
  // Now the logic will only run if the conditions of the if statement is met!
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
  // // 1. Create a card variable, and hard code its value to a number (2-11)
  // let thirdCard = getRandomCard();
  // // 2. Add th new card to the sum variable
  // sum += thirdCard;
  // // Push the thirdCard to the cards array
  // cards.push(thirdCard);
  // // console log shows the thirdCard is now added to the array!
  // console.log(cards);
  // // 3. Call startGame()
  // renderGame();
}

let end = ['End the game in three', 'two', 'one'];
// WE INSTEAD CALLED THE ARRAY ONE BY ONE THROUGH CONSOLE.LOG
console.log(end[0]);
console.log(end[1]);
console.log(end[2]);
// This equals "3" because array is 0 index but legnth is not
// The length property of an array is always one larger!
// The length of an array is counted from number 1
console.log(end.length);

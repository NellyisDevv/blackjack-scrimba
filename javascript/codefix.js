let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let cards = [];
let message = '';

function getRandomCard() {
  // Grab a number from 1 to 13 that is not a float num
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  // If 10 is higher than the randomNumber return 10
  if (randomNumber > 10) {
    return 10;
    // If the randomNumber is 1 return 11
  } else if (randomNumber === 1) {
    return 11;
    // Else if the number is between 2 and 9 return that
  } else {
    return randomNumber;
  }
}

function startGame() {
  // Game started so you are now alive!
  isAlive = true;
  // The first card will grab a randomNumber
  let firstCard = getRandomCard();
  // The second card will grab a randomNumber
  let secondCard = getRandomCard();
  // First and second card are placed in an array!
  cards = [firstCard, secondCard];
  // Sum equals the firstCard plus the secondCard
  sum = firstCard + secondCard;
  // You can now execute the game!
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = 'You are out of the game!';
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Card here represents the newCard
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

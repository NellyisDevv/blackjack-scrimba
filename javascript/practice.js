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

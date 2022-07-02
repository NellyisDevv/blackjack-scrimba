let helpEl = document.querySelector('#help-el');
let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Create an if statement that checks that both varaibles are false
// If so, run the showSolution() function

function showSolution() {
  message = 'The answer is' + ' ' + Math.floor(Math.random() * 100);
  helpEl.textContent = message;
}

function dontShowSolution() {
  message = 'You still have more hints left!';
  helpEl.textContent = message;
}

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
} else {
  dontShowSolution();
}

// OR operator ||
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let showEl = document.getElementById('show-el');
let likesDocumentaries = false;
let likesStartups = true;

function recommendMovie() {
  message = 'Check out this new startup called "FYRE PROJECT"';
  showEl.textContent = message;
}

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
} else {
  showEl.textContent = 'Your all caught up!';
}

// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: 'Learn CSS Grid for free',
  lessons: 16,
  creator: 'Per Harald Borgen',
  length: 63,
  // level is from 0 to 3 so 0 easy 3 very difficult!
  level: 2,
  isFree: true,
  tags: ['html', 'css'],
};

// console.log is an example of an object because "console" is an OBJECT!
console.log(course.length);
console.log(course.title);
// Log out array
console.log(course.tags);
// You can also use bracket notation!
// Its a bit harder and not always needed just keep it in mind!
console.log(course['tags']);

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
  title: 'Live like a King in my Castle',
  rating: 4.95,
  price: 190,
  likeCastle: false,
  pictures: ['one', 'two', 'three', 'four'],
};

console.log(castle.title);
console.log(castle.pictures);
console.log(castle['pictures']);

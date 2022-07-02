// Grab a number from 1 to 6
let numberOne = Math.floor(Math.random() * 6) + 1;
// Grab a number from 2 to 11
let numberTwo = Math.floor(Math.random() * 10) + 2;
let countEl = document.querySelector('#count-el');
countEl.textContent = numberOne + numberTwo;

let generateEl = document.getElementById('generate-el');
// On click function without having to put it in HTML
generateEl.onclick = () => {
  generateEl.textContent = Math.floor(Math.random() * 100) + 1;
};

let barEl = document.getElementById('bar-el');
let age = 20;
if (age >= 21) {
  barEl.textContent = 'You may enter!';
} else if (age < 21) {
  barEl.textContent = 'You are not old enough!';
}

let introduceEl = document.getElementById('introduce-el');
let completedCert = true;
let giveCert = true;
function certMessage() {
  let message = 'You have completed the course here is your cert!';
  introduceEl.textContent = message;
}
function noCertMessage() {
  let message = 'please complete the course to recieve cert!';
  introduceEl.textContent = message;
}
if (completedCert === true && giveCert === true) {
  certMessage();
} else {
  noCertMessage();
}

let rightEl = document.querySelector('#right-el');
function right() {
  rightEl.textContent = 'right';
}

let nellyEl = document.getElementById('nelly-el');
let nellyArray = [
  'Hi my name is Nelly',
  'I am currently',
  'learning how to code!',
];
// for (let i = 0; i < nellyArray.length; i++) {
//   // += is needed or array will only show 'learning how to code!'
//   // + is needed after nellyArray[i] to space the text!
//   nellyEl.textContent += nellyArray[i] + ' ';
// }
let distractions = ['Im learning how to cut out distractions!'];
// push adds another array inside
nellyArray.push(distractions);
// pop removes the last array
nellyArray.pop(distractions);
nellyArray.push(distractions);
for (let i = 0; i < nellyArray.length; i++) {
  nellyEl.textContent += nellyArray[i] + ' ';
}

let pushArray = document.getElementById('push-array');
// You can push a string, boolean and number in an array!
let pushedArray = ['Nelson', true, 23];
// i += 1 is the same as doing i++
for (let i = 0; i < pushedArray.length; i += 1) {
  pushArray.textContent += pushedArray[i] + ' ';
}

// i starts at 10 and goes up 10 every time until 100
for (i = 10; i < 101; i += 10) {
  console.log(i);
}

// i counts from 0 to 10
for (i = 0; i < 11; i++) {
  console.log(i);
}

// Counter App
let numEl = document.getElementById('num-el');
let saveEl = document.getElementById('save-el');
sum = 0;
function increment() {
  sum += 1;
  numEl.textContent = sum;
}
function decrement() {
  sum -= 1;
  numEl.textContent = sum;
}
function save() {
  saveEl.textContent += sum + ', ';
  sum = 0;
  numEl.textContent = sum;
}

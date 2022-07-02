let messageEl = document.getElementById('message-el');
let hasCompletedCourse = true;
let giveCertificate = true;

function generateCertificate() {
  alert = 'You have completed the course here is your certificate!';
  messageEl.textContent = alert;
}

function dontGenerateCertificate() {
  alert = 'Please complete the course to recieve your certificate!';
  messageEl.textContent = alert;
}

// if (hasCompletedCourse === true) {
//   if (giveCertificate === true) {
//     generateCertificate();
//   } else {
//     dontGenerateCertificate();
//   }
// }

// if hasCompletedCourse equals true AND giveCertificate equals true
// run the following code!
if (hasCompletedCourse === true && giveCertificate === true) {
  generateCertificate();
} else {
  dontGenerateCertificate();
}

// Scrimba Challenge
let solutionEl = document.getElementById('solution-el');
let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Create an if statement that checks that both variables are false
if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}
// If so, run the showSolution() function

function showSolution() {
  alert =
    'You have ran out of tries the answer is' +
    ' ' +
    Math.floor(Math.random() * 100);
  solutionEl.textContent = alert;
}

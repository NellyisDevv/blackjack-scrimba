let modEl = document.querySelector('#mod-el');
modArray = ['Modify this h2!'];
modEl.textContent = modArray;
modArrayText = 'This has been modified!';
modArray.push(modArrayText);
// This needs to be called again since script reads top to bottom1
modEl.textContent = modArray;

// We only want to call this function if the two conditions are true!
// The user has completed the course so he recieves the certificate!
let certEl = document.getElementById('cert-el');
let hasCompletedCourse = true;
let givesCertificate = true;
function generateCertificate() {
  let certificate = 'You have recieved the certificate!';
  certEl.textContent = certificate;
}
function dontGenerateCertificate() {
  let noCertificate = 'You have not recieved the certificate!';
  certEl.textContent = noCertificate;
}
// One way you can do it is like this with the if else statements
// But there is also another way to do this that is less clunky
// if (hasCompletedCourse === true) {
//   if (givesCertificate === true) {
//     generateCertificate();
//   }
// } else {
//   dontGenerateCertificate();
// }
// && is the AND operator this would be read out like this
// If hasCompletedCourse equals true AND givesCertificate equals true
// You can also remove === true because hasCompletedCourse and
// givesCertificate are both boolean values that can only be
// true or false!
if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
} else {
  dontGenerateCertificate();
}

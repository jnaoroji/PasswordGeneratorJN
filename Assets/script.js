// Assignment Code
var generateBtn = document.querySelector("#generate");
// define all variables
var passwordLength;
var passwordLowercase;
var passwordUppercase;
var passwordNumeric;
var passwordSpecial;

function generatePassword() {
  var criteria = window.confirm("Please choose which password criteria to include");
  if (!criteria) {
    return;
  }
  var passwordLength = window.prompt("Choose a length between 8 - 128 characters");
  //var index = Math.floor(Math.random() * passwordLength);
  if (!passwordLength) {
    return;
  }
  var passwordLowercase = window.confirm("Would you like to include lowercase letters?");
  
  if (!passwordLowercase) {
    return;
  }
  var passwordUppercase = window.confirm("Would you like to include Uppercase letters?");
  if (!passwordUppercase) {
    return;
  }
  var passwordNumeric = window.confirm("Would you like to include Numbers?");
  if (!passwordNumeric) {
    return;
  }
  var passwordSpecial = window.confirm("Would you like to include Special Characters?");
  if (!passwordSpecial) {
    return;
  }
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//generateBtn = window.prompt ("Choose your criteria:");
//
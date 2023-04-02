// Assignment Code
var generateBtn = document.querySelector("#generate");
// define all variables
var passwordLength;
var passwordLowercase;
var passwordUppercase;
var passwordNumeric;
var passwordSpecial;
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// converting 'lower' string into a new string thats uppercase 'upper'.
var upper = lower.map(element => {
            return element.toUpperCase();
            });
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var UserChoice = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start function to define password criteria
function generatePassword() {
  var password = "";
  var criteria = window.confirm("Please choose which password criteria to include");
  if (!criteria) {
    return;
  }
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(window.prompt("Choose a length between 8 - 128 characters"));
  } 
  var passwordLowercase = window.confirm("Would you like to include lowercase letters?");
  
  if (passwordLowercase) {
    UserChoice = UserChoice.concat(lower);
    password += getRandom(lower);
  }
  var passwordUppercase = window.confirm("Would you like to include Uppercase letters?");
  if (passwordUppercase) {
    UserChoice = UserChoice.concat(upper);
    password += getRandom(upper);
  }
  var passwordNumeric = window.confirm("Would you like to include Numbers?");
  if (passwordNumeric) {
    UserChoice = UserChoice.concat(number);
    password += getRandom(number);
  }
  var passwordSpecial = window.confirm("Would you like to include Special Characters?");
  if (passwordSpecial) {
    UserChoice = UserChoice.concat(special);
    password += getRandom(special);
  }
  console.log(UserChoice);
  for (var i = password.length; i < passwordLength; i++) {
    password += getRandom(UserChoice);
  }
  return password;
}
 
 //loop for random password
 function getRandom (arr){
  return arr[Math.floor(Math.random() * arr.length)];
 }

// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



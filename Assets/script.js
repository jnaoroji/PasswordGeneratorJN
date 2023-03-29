// Assignment Code
var generateBtn = document.querySelector("#generate");
// define all variables
var passwordLength;
var passwordLowercase;
var passwordUppercase;
var passwordNumeric;
var passwordSpecial;
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upper = toUpperCase.lower;
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start function to define password criteria
function generatePassword() {
  var criteria = window.confirm("Please choose which password criteria to include");
  if (!criteria) {
    return;
  }
  var passwordLength = window.prompt("Choose a length between 8 - 128 characters");
  //var index = Math.floor(Math.random() * passwordLength);
  if (!passwordLength) {
    alert("This field is required!")
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128){
  alert("Invalid Choice! Try again to choose a length between 8 - 128 characters")
  return;
  }
  else (passwordLength >= 8 && passwordLength >= 128);{
    console.log(passwordLength);
  }
    
  var passwordLowercase = window.confirm("Would you like to include lowercase letters?");
  
  if (!passwordLowercase) {
    console.log(passwordLowercase=false);
  }
  else if (passwordLowercase){
    console.log(passwordLowercase);
  }

  var passwordUppercase = window.confirm("Would you like to include Uppercase letters?");
  if (!passwordUppercase) {
    console.log(passwordUppercase = false);
  }
  else if (passwordUppercase){
    console.log(passwordUppercase);
   
  }
  var passwordNumeric = window.confirm("Would you like to include Numbers?");
  if (!passwordNumeric) {
    console.log(passwordNumeric = false);
  }
  else if (passwordNumeric) {
    console.log(passwordNumeric);
  }
  var passwordSpecial = window.confirm("Would you like to include Special Characters?");
  if (!passwordSpecial) {
    console.log(passwordSpecial = false);
  }
  else if (passwordSpecial) {
    console.log(passwordSpecial);
  }
}
 
  if (passwordLowercase && passwordUppercase && passwordNumeric && passwordSpecial){
  UserChoice=(lower, toUpperCase(lower),number, special)
  console.log (UserChoice)
}

  for (var i = 0; i < passwordLength; i++) {
  var CreatePassword = userChoices[Math.floor(Math.random() * userChoices.length)];
  //passwordBlank.push(allChoices);
  //console.log(allChoices);
}
//var UserChoice = [passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial];
//console.log()

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

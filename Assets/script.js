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
    console.log(!passwordLowercase);
  }
  else if (passwordLowercase){
    console.log(passwordLowercase);
  }

  var passwordUppercase = window.confirm("Would you like to include Uppercase letters?");
  if (!passwordUppercase) {
    console.log(!passwordUppercase);
  }
  else if (passwordUppercase){
    console.log(passwordUppercase);
  }
  var passwordNumeric = window.confirm("Would you like to include Numbers?");
  if (!passwordNumeric) {
    console.log(!passwordNumeric);
  }
  else if (passwordNumeric) {
    console.log(passwordNumeric);
  }
  var passwordSpecial = window.confirm("Would you like to include Special Characters?");
  if (!passwordSpecial) {
    console.log(!passwordSpecial);
  }
  else if (passwordSpecial) {
    console.log(passwordSpecial);
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
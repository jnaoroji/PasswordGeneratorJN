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
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var UserChoice = [];
//var generatePassword = "";




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start function to define password criteria
function generatePassword() {
  var criteria = window.confirm("Please choose which password criteria to include");
  if (!criteria) {
    return;
  }
  var passwordLength = window.prompt("Choose a length between 8 - 128 characters");
  if (!passwordLength) {
    alert("This field is required!")
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128){
  alert("Invalid Choice! Try again to choose a length between 8 - 128 characters")
  return;
  }
  else (passwordLength >= 8 && passwordLength >= 128);{
    console.log("password length is " + passwordLength + " characters.");
  }
    
  var passwordLowercase = window.confirm("Would you like to include lowercase letters?");
  
  if (!passwordLowercase) {
    console.log(passwordLowercase = false);
  }
  else if (passwordLowercase){
   console.log("Lowercase = " + passwordLowercase);
  }

  var passwordUppercase = window.confirm("Would you like to include Uppercase letters?");
  if (!passwordUppercase) {
    console.log(passwordUppercase = false);
  }
  else if (passwordUppercase){
    console.log("Uppercase = " + passwordUppercase);
   
  }
  var passwordNumeric = window.confirm("Would you like to include Numbers?");
  if (!passwordNumeric) {
    console.log(passwordNumeric = false);
  }
  else if (passwordNumeric) {
    console.log("Numeric = " + passwordNumeric);
  }
  var passwordSpecial = window.confirm("Would you like to include Special Characters?");
  if (!passwordSpecial) {
    console.log(passwordSpecial = false);
  }
  else if (passwordSpecial) {
    console.log("Special = " + passwordSpecial);
  }
}
 function generatePassword (){
// 4 choices
if (passwordLowercase && passwordUppercase && passwordNumeric && passwordSpecial){
  UserChoice = lower.concat(upper, number, special);
  console.log(UserChoice);
}

// no choices
else if (!passwordLowercase && !passwordUppercase && !passwordNumeric && !passwordSpecial){
alert("Invalid! please choose at least 1 criteria");
}

// 3 choices for password criteria
else if (passwordLowercase && passwordUppercase && passwordNumeric){
  UserChoice = lower.concat(upper, number);
  console.log(UserChoice);
}
else if (passwordLowercase && passwordUppercase && passwordSpecial){
  UserChoice = lower.concat(upper, special);
  console.log(UserChoice);
}
else if (passwordLowercase && passwordNumeric && passwordSpecial){
  UserChoice = lower.concat(number, special);
  console.log(UserChoice);
}
else if (passwordUppercase && passwordNumeric && passwordSpecial){
  UserChoice = upper.concat(number, special);
  console.log(UserChoice);
}

// 2 choices for password criteria
else if (passwordLowercase && passwordUppercase){
  UserChoice = lower.concat(upper);
  console.log(UserChoice);
}
else if (passwordLowercase && passwordNumeric){
  UserChoice = lower.concat(number);
  console.log(UserChoice);
}
else if (passwordLowercase && passwordSpecial){
  UserChoice = lower.concat(special);
  console.log(UserChoice);
}
else if (passwordUppercase && passwordNumeric){
  UserChoice = upper.concat(number);
  console.log(UserChoice);
}
else if (passwordUppercase && passwordSpecial){
  UserChoice = upper.concat(special);
  console.log(UserChoice);
}
else if (passwordNumeric && passwordSpecial){
  UserChoice = number.concat(special);
  console.log(UserChoice);
}

// 1 choice for password criteria
else if (passwordLowercase){
  UserChoice = push.lower;
  console.log(UserChoice);
}
else if (passwordUppercase){
  UserChoice = push.upper;
  console.log(UserChoice);
}
else if (passwordSpecial){
  UserChoice = push.special;
  console.log(UserChoice);
}
else if (passwordNumeric){
  UserChoice = push.number;
  console.log(UserChoice);
}
 }
 //loop for random password
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  for (var i = 0; i < passwordLength; i++) {
    var password = UserChoice[Math.floor(Math.random() * UserChoice.length)];
    console.log(UserChoice.join(""));
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
 //var generatePassword= [];
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password ;

//};


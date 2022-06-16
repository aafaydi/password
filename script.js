// Assignment code here
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var allchar = [];

function generatePassword() {
  // allchar = allchar + lower;

  var passwordlength = prompt("how many charcters is your password would be");

  if (passwordlength < 8 || passwordlength > 128) {
    return "password has to be greater than 8 and less than 128";
    //var passwordlength = prompt("how many charcters is your password would be");
  }


  else if (isNaN(passwordlength)) {
    passwordlength = prompt("Please enter a valid number.");
  }

  else {
    alert("Your password will be " + passwordlength + " characters.");

  }

  var upperconf = window.confirm("Would like to add uppercase to you password y/n");
  if (upperconf) {
    alert("Your password will have Uppercase.");

  }

  else {
    alert("Your password will NOT have Uppercase.");

  }

  var lowerconf = window.confirm("Would like to add lowercase to you password y/n");
  if (lowerconf) {
    alert("Your password will have lowercase.");

  }

  else {
    alert("Your password will NOT have lowercase.");

  }

  var numberconf = window.confirm("Would like to add numbers to you password y/n");
  if (numberconf) {
    alert("Your password will have Number.");

  }

  else {
    alert("Your password will NOT have Number.");

  }

  var symbolconf = window.confirm("Would like to add symbol to you password y/n");
  if (symbolconf) {
    alert("Your password will have Symbol.");

  }

  else {
    alert("Your password will NOT have Symbol.");

  }

  if (upperconf === false && lowerconf === false && numberconf === false && symbolconf === false) {
    return "Please select at least one character type.";
  };

  
  if (upperconf) {
    allchar = allchar.concat(upper);
  }

  if (lowerconf) {
    allchar = allchar.concat(lower);
  }

  if (numberconf) {
    allchar = allchar.concat(number);
  }

  if (symbolconf) {
    allchar = allchar.concat(symbol);
  }


  let Gpassword = "";
  for (var i = 0; i < passwordlength; i++) {
    let range = [Math.floor(Math.random() * allchar.length)];
    Gpassword = Gpassword + allchar[range];

  }

  return Gpassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






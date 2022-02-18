// Assignment code here
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var allchar = "";

function generatePassword() {
  allchar = allchar + lower;

  var passwordlength = prompt("how many charcters is your password would be");

  if (passwordlength < 8) {
    alert("password has to be greater than 8 and less than 128")
    var passwordlength = prompt("how many charcters is your password would be");
  }



  else if (passwordlength > 128) {
    alert("password has to be greater than 8 and less than 128")
    var passwordlength = prompt("how many charcters is your password would be");
  }

  var upperconf = window.confirm("Would like to add uppercase to you password y/n");
  if (upperconf) {
    allchar = allchar + upper;
  }

  var lowerconf = window.confirm("Would like to add lowercase to you password y/n");
  if (lowerconf) {
    allchar = allchar + lower;
  }

  var numberconf = window.confirm("Would like to add numbers to you password y/n");
  if (numberconf) {
    allchar = allchar + number;
  }

  var symbolconf = window.confirm("Would like to add symbol to you password y/n");
  if (symbolconf) {
    allchar = allchar + symbol;
  }


  console.log(allchar);

  var Gpassword = "";
  for (var i = 0; i < passwordlength; i++) {
    Gpassword += allchar.charAt(Math.floor(Math.random() * allchar.length));
  }

  return Gpassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


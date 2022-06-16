// Assignment code here
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
<<<<<<< HEAD
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

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
=======
var lower = "abcdefghijklmnopqrstuvwxyz";        //define lower
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        //define upper
var number= "0123456789";                        //define number
var symbol= "!@#$%^&*()_+~`|}{[]\:;?><,./-=";   // define symbol  
var allchar= "";                                //create allchar




function generatePassword() {
  allchar= allchar+ lower;     //add allchar to lower
 

var passwordlength = prompt("how many charcters is your password would be");  //create passwordlenght from the user input
if(passwordlength<8){     //condition if password length less that 8
  alert("password has to be greater than 8 and less than 128")  //alert message to add the right size
  var passwordlength = prompt("how many charcters is your password would be");  //if the size right in length assign it to newpaasword
  }
  else if(passwordlength>128){ //condition if password length greater that 128
    alert("password has to be greater than 8 and less than 128")      //alert message to add the right size
  var passwordlength = prompt("how many charcters is your password would be"); //if the size right in length assign it to newpaasword
  }
  
   var lowerconf = window.confirm("Would like to add lowercase to you password y/n"); //option to weather to add upper or not
    if(lowerconf){  //if yes 
      allchar= allchar + lower; //store that upper char to allchar
    }
 
 
    //option weather to add upper or not
    var upperconf = window.confirm("Would like to add uppercase to you password y/n"); //option to weather to add upper or not
    if(upperconf){  //if yes 
      allchar= allchar + upper; //store that upper char to allchar
    }

    //option weather to add number or not
    var numberconf =  window.confirm("Would like to add numbers to you password y/n"); 
    if(numberconf){  //if yes
      allchar= allchar + number; //if yes store that number char to allchar
    }
    
    //option weather to add symbol or not
    var symbolconf = window.confirm("Would like to add symbol to you password y/n"); 
    if(symbolconf){ //if yes
      allchar= allchar + symbol; //if yes store that symbol char to allchar
    }
    console.log(allchar); //display all char or answer 

 var Gpassword="";    //create new var Gpassword
 for( var i=0; i<passwordlength; i++) {  //loop passworld length if less than 128 and greater than 8
  Gpassword += allchar.charAt(Math.floor(Math.random() * allchar.length)); //generate randowm number withing allchar length
 }

return Gpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //create new var pass from function generate password()
>>>>>>> a6c29de6b0412c704f03c4b7676559fe29b1684f
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


<<<<<<< HEAD
// Get references to the #generate element


=======
>>>>>>> a6c29de6b0412c704f03c4b7676559fe29b1684f

// Assignment code here
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";        //define lower
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        //define upper
var number= "0123456789";                        //define number
var symbol= "!@#$%^&*()_+~`|}{[]\:;?><,./-=";   // define symbol  
var allchar= "";                                //create allchar

var test = function() {
  var response = prompt("how many charcters is your password would be");
  if (response != "number" || response === "") {
    window.alert("You need to provide a valid answer! Please try again."); 
    test();
  }
  return response;
}


function generatePassword() {
  allchar= allchar+ lower;     //add allchar to lower
 

var passwordlength = prompt("how many charcters is your password would be");  //create passwordlenght from the user input
if( passwordlength < 8){     //condition if password length less that 8
  alert("password has to be greater than 8 and less than 128")  //alert message to add the right size
  var passwordlength = prompt("how many charcters is your password would be");  //if the size right in length assign it to newpaasword
  }
  else if(passwordlength>128){ //condition if password length greater that 128
    alert("password has to be greater than 8 and less than 128")      //alert message to add the right size
  var passwordlength = prompt("how many charcters is your password would be"); //if the size right in length assign it to newpaasword
  }
 
 
    //option weather to add upper or not
    var upperconf = window.confirm("Would like to add uppercase to you password y/n"); //option to weather to add upper or not
    if(upperconf){  //if yes 
      allchar= allchar + upper; //store that upper char to allchar
    }

    //option weather to add number or not
    var numberconf =  window.confirm("Would like to add numbers to you password y/n"); 
    if( numberconf){  //if yes
      allchar= allchar + number; //if yes store that number char to allchar
    }
    
    //option weather to add symbol or not
    var symbolconf = window.confirm("Would like to add symbol to you password y/n"); 
    if( symbolconf){ //if yes
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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// add prompts when generate password button is clicked       DONE
// prompts should include special characters, uppercase, lowercase, length, numbers etc and be selectable
//length must be between 8-128 
//when one or more is selected then user can progress 
//need to add selectors to each line on the prompt
//add character length chooser in prompts
//link selector input to text/number/character generator
//randomise order of characters generated
//display password to alert or write it onto the page



//  Checkin if input is a number 
// function checkInp()
// {
//   var x=document.forms["myForm"]["age"].value;
//   if (isNaN(x)) 
//   {
//     alert("Must input numbers");
//     return false;
//   }
// }






// Assignment Code
var generateBtn = document.querySelector("#generate");


var characterLength = 128;
var charSet = "abcdefghijklmnopqrstuvwxyz"
var charSetUpper = charSet.toUpperCase()
var numset = [1,2,3,4,5,6,7,8,9,0]
var specialChar = "!@#$%^&?"


function passwordRequirements (){
  var lengthRequired = window.prompt("How many characters does you password need to be?")
  var upperRequired = window.confirm("Does your password required uppercase characters")
  var specRequired = window.confirm("Does your password require special characters?")
  var numRequired = window.confirm("Does your password require numbers?")

  }

generateBtn.addEventListener("click", passwordRequirements);


















function generator(){
  var maxlength = 128;
  var characterLength = chosenLength;
  var charSet = "abcdefghijklmnopqrstuvwxyz"
  var charSetUpper = charSet.toUpperCase()
  var numset = [1,2,3,4,5,6,7,8,9,0]
  var specialChar = "!@#$%^&?"
  var pass = ""

  for (var i = 8; i < chosenLength; i++) {
    pass += charSet.charAt(Math.floor(Math.random()*charSet.length))
  }

  console.log(pass);

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

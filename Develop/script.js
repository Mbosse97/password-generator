// add prompts when generate password button is clicked       DONE
// prompts should include special characters, uppercase, lowercase, length, numbers etc and be selectable    DONE
//length must be between 8-128      DONE
//when one or more is selected then user can progress          DONE
//need to add selectors to each line on the prompt              DONE
//add character length chooser in prompts              DONE
//link selector input to text/number/character generator      DONE
//randomise order of characters generated                DONE
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



function passwordRequirements (){
  var lengthRequired = window.prompt("How many characters does you password need to be?");
  var lengthRequiredNumber = parseInt(lengthRequired);

  while (isNaN(lengthRequired)) {
    alert("Must input number")
    return;
  } 
  
  while (lengthRequiredNumber<8 || lengthRequiredNumber>128) {
    alert("Password length must be between 8 and 128 characters")
    return;
  }

  var upperRequired = window.confirm("Does your password required uppercase characters")
  var specRequired = window.confirm("Does your password require special characters?")
  var numRequired = window.confirm("Does your password require numbers?")

  var charSet = ("abcdefghijklmnopqrstuvwxyz").split("");
  var charSetUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
  var numset = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ("!@#$%^&?").split("");

  var totalRequirements = "";

  if (upperRequired && specRequired && numRequired) {
    totalRequirements = charSet.concat(charSetUpper,numset,specialChar);
  } else if (upperRequired && specRequired && !numRequired) {
    totalRequirements = charSet.concat(charSetUpper,specialChar);
  } else if (upperRequired && !specRequired && !numRequired) {
    totalRequirements = charSet.concat(charSetUpper);
  } else if (!upperRequired && specRequired && numRequired) {
    totalRequirements = charSet.concat(numset,specialChar);
  } else if (!upperRequired && !specRequired && numRequired) {
    totalRequirements = charSet.concat(numset)
  } else if (!upperRequired && specRequired && !numRequired) {
    totalRequirements = charSet.concat(specialChar)
  } else if (!upperRequired && !specRequired && !numRequired) {
    totalRequirements = charSet
  } 

  var totalRequirementsString = totalRequirements.join("");
  var passwordchosen = "";

  for (var i = 1; i < lengthRequired; i++) {
    passwordchosen += totalRequirementsString.charAt(Math.floor(Math.random()*totalRequirements.length))
  }

  console.log(passwordchosen)

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

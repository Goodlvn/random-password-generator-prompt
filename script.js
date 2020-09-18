// Assignment Code
// var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "~"];

ComboArray=[];

notValidInput = true;

var passwordLength;

/////

console.log("Hi, Im working!")

/////


function generatedPassword() {

  

  while(notValidInput){

    var passwordInputLength = prompt("How long you want your password to be? pick a number between 8 and 128.");

    var passwordLength = parseInt(passwordInputLength)

    if (!isNaN(passwordLength) && 8 < passwordLength && passwordLength < 128) {

      notValidInput = false;

    } else {

      passwordLength = 0;
      
      alert("Please input a number between 8 and 128");
    }
  }
  





  

//have to do more work here in the validation of the input - maybe use some sort of number validator and range validator (a small loop of its own)
//if passwordLength is valid 
  // if (passwordInputLength) {

  //   var passwordLength = passwordLength + passwordInputLength;

  // } else if(!passwordInputLength) {

  //   var passwordInputLength = prompt("How long you want your password to be? pick a number between 8 and 128.");

  // } 

  console.log("I'm still working");
  console.log(passwordLength);

  var lowerCaseIsTrue = confirm("Would you like to use lowercase letters in your password?");

  var upperCaseIsTrue = confirm("would you like to use uppercase letters in your password?");

  var numbersIsTrue = confirm("would you like to use numbers in your password?");

  var specialIsTrue = confirm("would you like to use special characters in your password?");


  if (lowerCaseIsTrue || upperCaseIsTrue || numbersIsTrue || specialIsTrue) {

    if(lowerCaseIsTrue) {
      
    }

  } else {
    alert("Please refresh the page and start all over. You must choose at least one character criteria to continue");
  }


}

console.log(generatedPassword());




// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// GLOBAL
// array 
// array 
// array 
// array 



// LOCAL
// generatedPassword()

// prompt

// CONFIRMS
// CONFIRMS
// CONFIRMS
// CONFIRMS

// Valid Input 

// if statement {

// }

// if statement {
  
// }
// if statement {
  
// }
// if statement {
  
// }




// return password



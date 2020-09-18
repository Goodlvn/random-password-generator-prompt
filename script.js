// Assignment Code
var generateBtn = document.getElementById("generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "~"];

///

var passwordLength = 0;

var comboArray=[];

//figure out a way to start as false
var notValidInput = true; 

var passwordGen = [];

var ranLower;

var ranUpper;

var ranNumber;

var ranSpecial;
///

 



function writePassword(){

  notValidInput = true;

  while(notValidInput){

    var passwordInputLength = prompt("How long you want your password to be? pick a number between 8 and 128.");

    passwordLength = parseInt(passwordInputLength)

    console.log(passwordLength);

    if (!isNaN(passwordLength) && 7 < passwordLength && passwordLength < 129) {

      notValidInput = false;
      
    } else {

      passwordLength = 0;
      
      alert("Please input a number between 8 and 128");
    }
  }

  lowerCaseIsTrue = confirm("Would you like to use lowercase letters in your password?");

  upperCaseIsTrue = confirm("would you like to use uppercase letters in your password?");

  numbersIsTrue = confirm("would you like to use numbers in your password?");

  specialIsTrue = confirm("would you like to use special characters in your password?");


  if (lowerCaseIsTrue || upperCaseIsTrue || numbersIsTrue || specialIsTrue) {

    if(lowerCaseIsTrue) {

      ranumL = Math.floor(Math.random() * lowerCase.length);

      ranLower = lowerCase[ranumL];

      comboArray.push.apply(comboArray, lowerCase);

    }

    if(upperCaseIsTrue) {

      ranumU = Math.floor(Math.random() * upperCase.length);

      ranUpper = upperCase[ranumU];

      comboArray.push.apply(comboArray, upperCase);
    }

    if(numbersIsTrue) {

      ranumN = Math.floor(Math.random() * numbers.length);

      ranNumber = numbers[ranumN];

      comboArray.push.apply(comboArray, numbers);
    }

    if(specialIsTrue) {

      ranumS = Math.floor(Math.random() * special.length);

      ranSpecial = special[ranumS];

      comboArray.push.apply(comboArray, special);
    }

  } else {

    alert("Please refresh the page and start all over. You must choose at least one character criteria to continue");
  }

  var password = generatePassword();

  var passwordText = document.getElementById("password");

  passwordText.value = password;

  return password
}

function randomCharacter() {

  return Math.floor(Math.random() * comboArray.length);
}


function generatePassword() {

  for(i = 0; i < passwordLength; i++) {

    passwordGen.push(comboArray[randomCharacter()]);
  } 

  if(lowerCaseIsTrue) {
    console.log(ranLower);

    passwordGen[1] = ranLower;
  }

  if(upperCaseIsTrue) {
    console.log(ranUpper);

    passwordGen[3] = ranUpper;
  }

  if(numbersIsTrue) {
    console.log(ranNumber);

    passwordGen[5] = ranNumber;
  }

  if(specialIsTrue) {
    console.log(ranSpecial);

    passwordGen[7] = ranSpecial;
  }

  return passwordGen.join("");
}

function clearText() {

  var newText = document.getElementById("password");
  newText.value = "";

}


// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);








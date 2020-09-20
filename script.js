// Variables 
var generateBtn = document.getElementById("generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "~"];

var comboArray=[];

var passwordLength;

var validInput = false; 

var ranLower;

var ranUpper;

var ranNumber;

var ranSpecial;

//Functions
function writePassword(){

  var password = generatePassword();

  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

function randomNumber(argument) {

  return Math.floor(Math.random() * argument);
}

function addValue(characterChoice){
  comboArray.push.apply(comboArray, characterChoice);

}

function generatePassword() {

  var numCheck = /^[0-9]+$/;

  validInput = false;

  while(!validInput){

    passwordLength = prompt("How long you want your password to be? pick a number between 8 and 128.");

      if (passwordLength.match(numCheck) && 7 < passwordLength && passwordLength < 129){

      validInput = true;
      
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

      ranumL = randomNumber(lowerCase.length);

      ranLower = lowerCase[ranumL];

      addValue(lowerCase);

    }

    if(upperCaseIsTrue) {

      ranumU = randomNumber(upperCase.length);

      ranUpper = upperCase[ranumU];

      addValue(upperCase);
    }

    if(numbersIsTrue) {

      ranumN = randomNumber(numbers.length);

      ranNumber = numbers[ranumN];

      addValue(numbers);
    }

    if(specialIsTrue) {

      ranumS = randomNumber(special.length);

      ranSpecial = special[ranumS];

      addValue(special);
    }

  } else {

    alert("Please refresh the page and start all over. You must choose at least one character criteria to continue");
  }

// Code that creates the password

  passwordGen = [];

  for(i = 0; i < passwordLength; i++) {

    passwordGen.push(comboArray[randomNumber(comboArray.length)]);
  } 

  if(lowerCaseIsTrue) {
    passwordGen[1] = ranLower;
  }

  if(upperCaseIsTrue) {
    passwordGen[3] = ranUpper;
  }

  if(numbersIsTrue) {
    passwordGen[5] = ranNumber;
  }

  if(specialIsTrue) {
    passwordGen[7] = ranSpecial;
  }

  return passwordGen.join("");
}

//Button Call
document.getElementById("generate").addEventListener("click", writePassword);








// Assignment code here

// character variables to draw from
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "-", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// maths for picking randomized characters (+1 max as all references are arrays)
var randomizer = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
}

// if/else function to keep previous settings but reask passLength should they mistype
var getPassLength = function (length = 0) {
  length = window.prompt("How long would you like the password to be? (8-128)");

  // parameters met, return value for passLength
  if (length >= 8 && length <= 128) {
    window.alert("Great! We'll make sure the password is " + length + " characters in length!");
    console.log(length);
    return length;
    // keep retrying until a vailid option is selected
  } else {
    window.alert("Oops! Looks like we didn't pick a valid option! Let's try this again.");
    // return value even if wrong
    return getPassLength(length);
  }
};

// generate password function
var generatePassword = function () {

  // confirm uppercase is wanted in generation
  var upperConfirm = window.confirm("Do you want to use uppercase letters? (ABC)");
  if (upperConfirm) {
    window.alert("Great! We'll use uppercase letters!");
    console.log(upperConfirm);
  } else {
    window.alert("OK! We won't use uppercase letters!");
    console.log(upperConfirm);
  }

  // confirm lowercase is wanted in generation
  var lowerConfirm = window.confirm("Do you want to use lower case letters? (abc)");
  if (lowerConfirm) {
    window.alert("Great! We'll use lowercase letters!");
    console.log(lowerConfirm);
  } else {
    window.alert("OK! We won't use lowercase letters!");
    console.log(lowerConfirm);
  }

  // confirm numbers are wanted in generation
  var numberConfirm = window.confirm("Do you want to use numbers? (123)");
  if (numberConfirm) {
    window.alert("Great! We'll use numbers!");
    console.log(numberConfirm);
  } else {
    window.alert("OK! We won't use numbers!");
    console.log(numberConfirm);
  }

  // confirm special characters are wanted in generation
  var specialConfirm = window.confirm("Do you want to use special characters? (!?*)");
  if (specialConfirm) {
    window.alert("Great! We'll use special characters!")
    console.log(specialConfirm);
  } else {
    window.alert("OK! We won't use numbers!");
    console.log(specialConfirm);
  }

  // seperate function to verify pw length without starting over or clear previous choices pending mistype
  var passLength = getPassLength();
  console.log(passLength);

  // verify we're using at least one character type for generation
  if (upperConfirm || lowerConfirm || numberConfirm || specialConfirm) {
    window.alert("Awesome! Let's get to generating!\n\nUppercase letters: " + upperConfirm + ".\nLowercase letters: " + lowerConfirm + ".\nNumbers: " + numberConfirm + ".\nSpecial characters: " + specialConfirm + ".\nLength: " + passLength + ".");
    var passwordGen = "";
    // pick number between 1-4, verify if selected by user (true), true = randomize array item or false i-- to maintain pass length and try again for valid char type
    for (var i = 0; i < passLength; i++) {
      var charGenerator = randomizer(1, 5);
      switch (charGenerator) {
        case 1:
          if (upperConfirm) {
            passwordGen += letterUpper[randomizer(0, letterUpper.length)];
          } else {
            i--;
          }
          break;
        case 2:
          if (lowerConfirm) {
            passwordGen += letterLower[randomizer(0, letterLower.length)];
          } else {
            i--;
          }
          break;
        case 3:
          if (numberConfirm) {
            passwordGen += number[randomizer(0, number.length)];
          } else {
            i--;
          }
          break;
        case 4:
          if (specialConfirm) {
            passwordGen += specialChar[randomizer(0, number.length)];
          } else {
            i--;
          }
          break;
      }

    }
  } else {
    // if all char types are false, kick user out and return 'undefined' allowing another attempt to generate.
    window.alert("Oops! Looks like we didn't pick any options to generate! Click 'Generate Password' to try again.");
  }

  return passwordGen;
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

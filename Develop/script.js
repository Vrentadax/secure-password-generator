// Assignment code here

// prompt for length of password 8-128
// prompt for use of lc, uc, num, and/or spec char
// validate "this will include xx characters, ok?"
// generate password w/ criteria
// write pw to page

// character variables to draw from
var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "-", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// maths for picking randomized characters
var randomizer = function (min, max)

// if/else function to keep previous settings but reask passLength should they mistype
var getPassLength = function () {
  var length = window.prompt("How long would you like the password to be? (8-128)");

  // parameters met, return value for passLength
  if (length >= 8 && length <= 128) {
    window.alert("Great! We'll make sure the password is " + length + " characters in length!");
    console.log(length);
    return length;

    // keep retrying until a vailid option is selected
  } else {
    window.alert("Oops! Looks like we didn't pick a valid option! Let's try this again.");
    getPassLength();
  }
};

// generate password function
var generatePassword = function() {

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
    window.alert("Awesome! Let's get to generating!");
    for (var i; i < passLength; i++) {
      // password += specChar[0];
      // password += letter[0]; 50/50 option to use .toLowerCase() if lower == true;
      // password += number[0];
      // 

    }
  } else {
    window.alert("Oops! Looks like we didn't pick any options to generate! Click 'Generate Password' to try again.");
  }
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

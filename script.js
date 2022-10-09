// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword(){
  var passwordLenght=parseInt(window.prompt("How long password length"));

  while (passwordLenght>128 || passwordLenght<8){
    alert("Make sure to choose your password from 8 to 128 characters ");
    passwordLenght = window.prompt("How long password length");
  }

  var useUppercase=confirm("Include Uppercase letters");
  alert(passwordLenght + " " +useUppercase);

  var useNumbers=confirm("Include Numbers");

  while (useUppercase == false && useNumbers == false){
    alert("Please choose at least one set")
    useUppercase=confirm("Include Uppercase letters");

    useNumbers=confirm("Include Numbers");
  }

  var allPossibleCharacters = [];

  if (useUppercase==true){
    allPossibleCharacters.push(...upperCaseList);
  }

  if (useNumbers==true){
    allPossibleCharacters.push(...numberList)
  }

  var password = [];

  for (var i = 0; i < passwordLenght; i++){
    var randomNumber = Math.floor(Math.random() * allPossibleCharacters.length);
    password.push(allPossibleCharacters[randomNumber]);
  }

  console.log("PASSWORD BEFORE JOIN", password)
  console.log("PASSWORD AFTER JOIN", password.join(""))

  return password.join("");
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

// for (var i=8; 8<128; i++)


// function writePassword(input) {
//   var password = generatePassword(characterAmount, includeUppercase, uncludeNumbers, includeSymbols);
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
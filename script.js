// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var symbolsList = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",
                    ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", 
                    "_", "{", "|", "}", "~", "`",  ];                   

function generatePassword(){
  var passwordLenght=parseInt(window.prompt("What is the password length?"));

  while (passwordLenght>128 || passwordLenght<8){
    alert("Make sure to choose your password from 8 to 128 characters ");
    passwordLenght = window.prompt("What is the password length?");
  }

  var useUppercase=confirm("Include Uppercase letters");
  alert(passwordLenght + " " +useUppercase);

  var useNumbers=confirm("Include Numbers");
  alert(passwordLenght + " " +useNumbers);

  while (useUppercase == false && useNumbers == false){
    alert("Please choose at least one set")
    useUppercase=confirm("Include Uppercase letters");

    useNumbers=confirm("Include Numbers");
  }

  var useLowercase=confirm("Include Lowercase letters");
  alert(passwordLenght + " " +useLowercase);

  var useSymbols=confirm("Include symbols");
  alert(passwordLenght + " " +useSymbols);

  while (useLowercase == false && useSymbols == false){
    alert("Please choose at least one set")
    useLowercase=confirm("Include Lowercase letters");

    useSymbols=confirm("Include Symbols");
  }

  var allPossibleCharacters = [];

  if (useUppercase==true){
    allPossibleCharacters.push(...upperCaseList);
  }

  if (useNumbers==true){
    allPossibleCharacters.push(...numberList)
  }

  if (useLowercase==true){
    allPossibleCharacters.push(...lowerCaseList)
  }
  
  if (useSymbols==true){
    allPossibleCharacters.push(...symbolsList)
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






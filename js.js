/*
    1- User chooses R, P or S
    2- Computer randomly chooses R, P or S
    3- If the user chose R and Computer chose R => it's a draw
    4- If the user chose R and Computer chose P => computer wins
    5- If the user chose R and Computer chose S => user wins
    6- If the user chose P and Computer chose R => user wins
    7- If the user chose P and Computer chose P => it's a draw
    8- If the user chose P and Computer chose S => computer wins
    9- If the user chose S and Computer chose R => computer wins
    10- If the user chose S and Computer chose P => user wins
    11- If the user chose S and Computer chose S => it's a draw
*/

var userInput=window.prompt("Make your choice: R, P or S");

if(userInput != "R" || userInput != "S" || userInput != "P"){
    window.alert("Please make sure to choose R, P or S.");
    userInput=window.prompt("Make your choice: R, P or S");
}

console.log(userInput);
window.alert("You chose "+userInput);

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max+1))
}

var computerdecision = ["Rock","Paper","Scissors"];
var RandomNumber = getRandomNumber(2);

window.alert("The computer chose "+computerdecision[RandomNumber]);

if (userInput == "R" && computerdecision[RandomNumber] == "Rock"){
    window.alert("It's a draw.")
}
if (userInput == "R" && computerdecision[RandomNumber] == "Paper"){
    window.alert("Computer wins.")
}
if (userInput == "R" && computerdecision[RandomNumber] == "Scissors"){
    window.alert("User wins.")
}
if (userInput == "S" && computerdecision[RandomNumber] == "Scissors"){
    window.alert("It's a draw.")
}
if (userInput == "S" && computerdecision[RandomNumber] == "Rock"){
    window.alert("Computer wins.")
}
if (userInput == "S" && computerdecision[RandomNumber] == "Paper"){
    window.alert("User wins.")
}
if (userInput == "P" && computerdecision[RandomNumber] == "Paper"){
    window.alert("It's a draw.")
}
if (userInput == "P" && computerdecision[RandomNumber] == "Scissors"){
    window.alert("Computer wins.")
}
if (userInput == "P" && computerdecision[RandomNumber] == "Rock"){
    window.alert("User wins.")
}

/**
 * Assume you have a function randomNumber(x,y) that gives you
 * a random number between x and y.
 * 1- Generate a random number between 1 and 3
 * 2- If the number is one: choose R
 * 3- If the number is two: choose P
 * 4- If the number is three: choose S
 * 
 * 1- Generate a random number between 0 and 2
 * 2- Have an array with [R,P,S]
 * 3- Return array[random number]
 */


function getRandomNumber(max) {
    return Math.floor(Math.random() * (max+1))
}
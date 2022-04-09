// Variable userScore -- integer = 0
let userScore = 0;
// Variable compScore -- integer = 0
let compScore = 0;
// Computer randomly picks between ROCK, PAPER, or SCISSORS
// Variable compChoice = random pick from prior step
let choices = ['ROCK', 'PAPER', 'SCISSORS'];
let compChoice = choices[Math.floor(Math.random() * choices.length)];
// Prompt user to enter "ROCK," "PAPER," or "SCISSORS"
let input = prompt("Pick 'ROCK,' 'PAPER,' or 'SCISSORS'")
// Convert user input to uppercase
// Variable userChoice = user input
let userChoice = input.toUpperCase();
console.log(userChoice)
// If userChoice == Rock & compChoice == PAPER -- increment compScore by 1
// Else if userChoice == SCISSORS & compChoice == ROCK -- increment compScore by 1
// Else if userChoice == PAPER & compChoice == SCISSORS -- increment compScore by 1
if (userChoice == "ROCK" && compChoice == "PAPER" ||
    userChoice == "SCISSORS" && compChoice == "ROCK" ||
    userChoice == "PAPER" && compChoice == "SCISSORS"){
        compScore ++;
        alert("The computer won that round!")
    }
// Else if userChoice == ROCK & compChoice == SCISSORS -- increment userScore by 1
// Else if userChoice == SCISSORS & compChoice == PAPER -- increment userScore by 1
// Else if userChoice == PAPER & compChoice == ROCK -- increment userScore by 1
// Else notify user that this round is a draw.
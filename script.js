
let userScore = 0;
let compScore = 0;

let choices = ['ROCK', 'PAPER', 'SCISSORS'];
let compChoice = choices[Math.floor(Math.random() * choices.length)];

let input = prompt("Pick 'ROCK,' 'PAPER,' or 'SCISSORS'")

let userChoice = input.toUpperCase();
console.log(userChoice)

if (userChoice == "ROCK" && compChoice == "PAPER" ||
    userChoice == "SCISSORS" && compChoice == "ROCK" ||
    userChoice == "PAPER" && compChoice == "SCISSORS") {
    compScore++;
    alert(`The computer won that round! It picked ${compChoice}.`)
}

else if (userChoice == "ROCK" && compChoice == "SCISSORS" ||
    userChoice == "SCISSORS" && compChoice == "PAPER" ||
    userChoice == "PAPER" && compChoice == "ROCK") {
    userScore++;
    alert(`YOU won that round! The computer picked ${compChoice}.`)

} else {
    alert(`It's a tie! The computer picked ${compChoice}`)
}
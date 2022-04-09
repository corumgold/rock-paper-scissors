
let userScore = 0;
let compScore = 0;

// computer's selection

function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function userPlay() {
    let input = prompt("Pick 'ROCK,' 'PAPER,' or 'SCISSORS'")
    let playerChoice = input.toUpperCase();
    return playerChoice;
}

const userChoice = userPlay();
const compChoice = computerPlay();

function playRound(){

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
}

playRound()

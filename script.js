
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

const userSelection = userPlay();
const computerSelection = computerPlay();

function playRound(){

if (userSelection == "ROCK" && computerSelection == "PAPER" ||
    userSelection == "SCISSORS" && computerSelection == "ROCK" ||
    userSelection == "PAPER" && computerSelection == "SCISSORS") {
    compScore++;
    alert(`The computer won that round! It picked ${computerSelection}.`)
}

else if (userSelection == "ROCK" && computerSelection == "SCISSORS" ||
    userSelection == "SCISSORS" && computerSelection == "PAPER" ||
    userSelection == "PAPER" && computerSelection == "ROCK") {
    userScore++;
    alert(`YOU won that round! The computer picked ${computerSelection}.`)

} else {
    alert(`It's a tie! The computer picked ${computerSelection}`)
}
}

playRound()

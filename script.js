
let userScore = 0;
let compScore = 0;

// Random computer selection
function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function userPlay() {
    let input = prompt("Pick 'ROCK,' 'PAPER,' or 'SCISSORS'")
    let userChoice = input.toUpperCase();
    return userChoice;
}

function playRound(){

const userSelection = userPlay();
const computerSelection = computerPlay();

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

function playGame(){
    for (let i = 0; i < 5; i++) {
       playRound()
       alert(`Computer: ${compScore} You: ${userScore}`)
     }

     alert(`Game over! Final score is... Computer: ${compScore} You: ${userScore}`)
}

playGame()

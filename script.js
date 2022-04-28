
let userScore = 0;
let compScore = 0;

// Random computer selection
function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(userSelection) {

    const computerSelection = computerPlay();

    if (userSelection == "ROCK" && computerSelection == "PAPER" ||
        userSelection == "SCISSORS" && computerSelection == "ROCK" ||
        userSelection == "PAPER" && computerSelection == "SCISSORS") {
        compScore++;
        compWinMessage.style.display = "block";
    }

    else if (userSelection == "ROCK" && computerSelection == "SCISSORS" ||
        userSelection == "SCISSORS" && computerSelection == "PAPER" ||
        userSelection == "PAPER" && computerSelection == "ROCK") {
        userScore++;
        playerWinMessage.style.display = "block";

    } else {
        tie.style.display = "block"
    }

    modal.style.display = "flex";
}


let rockBtn = document.querySelector('#rock'); 
rockBtn.addEventListener('click', () => {
    playRound('ROCK'); //run the function with rock on click
});

let paperBtn = document.querySelector('#paper'); 
paperBtn.addEventListener('click', () =>{
    playRound('PAPER'); //run the function with paper on click
});

let scissorsBtn = document.querySelector('#scissors'); 
scissorsBtn.addEventListener('click', () => {
    playRound('SCISSORS'); //run the function with scissors on click
});

// score modal
let modal = document.querySelector("#score-modal");
let closeModal = document.querySelector("#close-modal");
let compWinMessage = document.querySelector("#computer-wins");
let playerWinMessage = document.querySelector("#player-wins");
let tie = document.querySelector("#tie");
//hide modal and all text content
closeModal.addEventListener('click', () => { 
    modal.style.display = "none";
    compWinMessage.style.display = "none"; 
    playerWinMessage.style.display = "none"; 
    tie.style.display = "none"; 
})


// // Game is over after someone wins 2 out of 3
// function playGame() {
//     while (compScore < 2 && userScore < 2) {
//         playRound()
//         alert(`Computer: ${compScore} You: ${userScore}`)
//     }

//     if (compScore === 2) {
//         alert(`Sorry, you lose! Final score is... Computer: ${compScore} You: ${userScore}`)
//     } else {
//         alert(`Congratulations! You win! Final score is... Computer: ${compScore} You: ${userScore}`)

//     }
// }

function getComputerChoice() {
  let computerChoice;
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  let winner,
      text;
  if (playerChoice === computerChoice) {winner = "tie"}
  else if ((playerChoice === "rock" && computerChoice === "scissors") || 
          (playerChoice === "paper" && computerChoice === "rock") ||
          (playerChoice === "scissors" && computerChoice === "paper")) {
            winner = "player"
          }  
  else {winner = "computer"}

  
  if (winner === "tie") {
    text = `You tie; ${playerChoice} equals ${computerChoice}.`
  } else if (winner === "player") {
    text = `You win; ${playerChoice} beats ${computerChoice}.`
    playerScore++;
  } else {
    text = `You lose; ${computerChoice} beats ${playerChoice}.`
    computerScore++;
  }
  
  roundMessage.textContent = text;

  computer.textContent = "Computer Score: " + computerScore;
  player.textContent = "Player Score: " + playerScore;
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;


  
}

function checkForWinner() {
  let winner = false;
  if (playerScore === 5) {
    roundMessage.textContent = `You beat the computer ${playerScore} to ${computerScore}. Congratulations!`
    winner = true;
  } else if (computerScore === 5) {
    roundMessage.textContent = `The computer beat you ${computerScore} to ${playerScore}. Better luck next time :(`
    winner = true;
  }
  if (winner) playAgain();
}

let playerScore = 0, 
    computerScore = 0;
    roundMessage = document.querySelector('.round-text')
    computer = document.querySelector('.computer-score');
    player = document.querySelector('.player-score');


let rockButton = document.querySelector('.rock')
let paperButton = document.querySelector('.paper')
let scissorsButton = document.querySelector('.scissors')
let buttons = [rockButton, paperButton, scissorsButton];
buttons.forEach (button => 
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice());
    checkForWinner();
  })
);







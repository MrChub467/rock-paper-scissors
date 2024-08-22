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
    // alert(`You tie; ${playerChoice} equals ${computerChoice}.`)
    text = `You tie; ${playerChoice} equals ${computerChoice}.`
  } else if (winner === "player") {
    // alert(`You win; ${playerChoice} beats ${computerChoice}.`)
    text = `You win; ${playerChoice} beats ${computerChoice}.`
    playerScore++;
  } else {
    // alert(`You lose; ${computerChoice} beats ${playerChoice}.`)
    text = `You lose; ${computerChoice} beats ${playerChoice}.`
    computerScore++;
  }
  
  roundMessage.textContent = text;

  computer.textContent = "Computer Score: " + computerScore;
  player.textContent = "Player Score: " + playerScore;
}

function checkForWinner() {
  if (playerScore === 5) {
    roundMessage.textContent = `You beat the computer ${playerScore} to ${computerScore}. Congratulations!`
  } else if (computerScore === 5) {
    roundMessage.textContent = `The computer beat you ${computerScore} to ${playerScore}. Better luck next time :(`
  }
}

let playerScore = 0, 
    computerScore = 0;
    roundMessage = document.querySelector('.round-text')
    computer = document.querySelector('.computer-score');
    player = document.querySelector('.player-score');


let rockButton = document.querySelector('.rock'),
    paperButton = document.querySelector('.paper'),
    scissorsButton = document.querySelector('.scissors')
let buttons = [rockButton, paperButton, scissorsButton];
buttons.forEach (button => 
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice());
    checkForWinner();
  })
);


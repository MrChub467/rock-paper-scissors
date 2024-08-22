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

function getPlayerChoice() {
  let playerChoice;
  
  playerChoice = prompt("Please enter rock(r), paper(p), or scissors(s)");

  while(true) {
    playerChoice = playerChoice.trim().toLowerCase();
    if (playerChoice === "rock" ||
        playerChoice === "r" ||
        playerChoice === "paper" ||
        playerChoice === "p" ||
        playerChoice === "scissors" ||
        playerChoice === "s"
        ) {
          break;
        }
    else {
      playerChoice = prompt("Invalid input. Please enter rock(r), paper(p), or scissors(s)");
    }    
  }
  if (playerChoice === "r") {playerChoice = "rock"}
  else if (playerChoice === "p") {playerChoice = "paper"}
  else if (playerChoice === "s") {playerChoice = "scissors"}

  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  let winner;
  if (playerChoice === computerChoice) {winner = "tie"}
  else if ((playerChoice === "rock" && computerChoice === "scissors") || 
          (playerChoice === "paper" && computerChoice === "rock") ||
          (playerChoice === "scissors" && computerChoice === "paper")) {
            winner = "player"
          }  
  else {winner = "computer"}
   
  if (winner === "tie") {
    alert(`You tie; ${playerChoice} equals ${computerChoice}.`)
  } else if (winner === "player") {
    alert(`You win; ${playerChoice} beats ${computerChoice}.`)
    playerScore++;
  } else {
    alert(`You lose; ${computerChoice} beats ${playerChoice}.`)
    computerScore++;
  }
  return winner; 
}

// function playGame() {
//   let again;
//   for (let i = 0; i < 5; ++i) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     again = playRound(playerSelection, computerSelection);
//     if (again === "tie") {
//       i--;
//     }
//   }
//   if (playerScore > computerScore) {
//     alert(`You beat the computer ${playerScore} to ${computerScore}. Congratulations!`)
//   } else {
//     alert(`The computer beat you ${computerScore} to ${playerScore}. Better luck next time :(`)
//   }
// }

let playerScore = 0, 
    computerScore = 0;
//playGame();

let buttons = document.querySelectorAll("button").forEach(button => 
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice());
  })
);




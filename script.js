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
  let keepGoing = true;
  let playerChoice;
  
  playerChoice = prompt("Please enter rock(r), paper(p), or scissors(s)");

  while(keepGoing) {
    playerChoice = playerChoice.trim().toLowerCase();
    if (playerChoice === "rock" ||
        playerChoice === "r" ||
        playerChoice === "paper" ||
        playerChoice === "p" ||
        playerChoice === "scissors" ||
        playerChoice === "s") {
          keepGoing = false
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
  else if (playerChoice === "rock" && computerChoice === "scissors") {winner = "player"}
  else if (playerChoice === "paper" && computerChoice === "rock") {winner = "player"}
  else if (playerChoice === "scissors" && computerChoice === "paper") {winner = "player"}
  else if (playerChoice === "paper" && computerChoice === "scissors") {winner = "computer"}
  else if (playerChoice === "scissors" && computerChoice === "rock") {winner = "computer"}
  else if (playerChoice === "rock" && computerChoice === "paper") {winner = "computer"}

  if (winner === "tie") {
    console.log(`You tie; ${playerChoice} equals ${computerChoice}.`)
  } else if (winner === "player") {
    console.log(`You win; ${playerChoice} beats ${computerChoice}.`)
    playerScore++;
  } else {
    console.log(`You lose; ${computerChoice} beats ${playerChoice}.`)
    computerScore++;
  }
  
  
}

function playGame() {
  
  for (let i = 0; i < 5; ++i) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  
  if (playerScore > computerScore) {
    console.log(`You beat the computer ${playerScore} to ${computerScore}. Congratualations!`)
  } else {
    console.log(`The computer beat you ${computerScore} to ${playerScore}. Better luck next time :(`)
  }
}

let playerScore = 0, 
    computerScore = 0;
playGame();



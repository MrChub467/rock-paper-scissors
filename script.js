function getComputerChoice() {
  let choice;
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }
  return choice;
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



  return playerChoice;
}

console.log(getPlayerChoice());
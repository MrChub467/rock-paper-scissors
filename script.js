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

console.log(getComputerChoice());
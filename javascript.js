function getComputerChoice(randomInt) {
    let computerHand;
    switch(randomInt) {
        case 1:
            computerHand = "rock";
            break;
        case 2:
            computerHand = "paper";
            break;
        case 3:
            computerHand = "scissors";
            break;
    }
console.log(computerHand);
}
let computerSelection = getComputerChoice(Math.floor(Math.random() *3) + 1);


let playerPrompt = window.prompt("Please type in Rock, Paper, or Scissors");
let playerSelection = playerPrompt.toLowerCase();
console.log(playerSelection);
playRound(playerSelection, computerSelection);

function playRound(player, computer) {

}
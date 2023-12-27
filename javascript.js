let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let message = '';

function player(elem) {
    playerSelection = elem.id;
    console.log(elem.id);
    if(playerScore >= 5 || computerScore >= 5) {
        alert("Game over! Play again");
        computerScore = 0;
        playerScore = 0;
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("message").innerHTML = '';
    }
    else {
        game(playerSelection);
    }
}


function getComputerChoice(randomInt) {
    switch(randomInt) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
}

function game(playerSelection) {
        let computerSelection = getComputerChoice(Math.floor(Math.random() *3) + 1);
        let result = playRound(playerSelection, computerSelection);

    }

function playRound(player, computer) {

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
            playerScore++;
            result = 'player';
            document.getElementById("computer").innerHTML = computerScore;
            document.getElementById("player").innerHTML = playerScore;
            document.getElementById("player-Selection").innerHTML = playerSelection;
            document.getElementById("computer-Selection").innerHTML = computerSelection;
            document.getElementById("message").innerHTML = `You selected ` + playerSelection + ` and that beats ` + computerSelection + ` you win!`;
      }

    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        computerScore++;
        result = 'computer';
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("player-Selection").innerHTML = playerSelection;
        document.getElementById("computer-Selection").innerHTML = computerSelection;
        document.getElementById("message").innerHTML = `You selected ` + playerSelection + ` and the computer selected ` + computerSelection + ` you lose!` ;
    }
    else {
        result =  "tie";
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("player-Selection").innerHTML = playerSelection;
        document.getElementById("computer-Selection").innerHTML = computerSelection;
        document.getElementById("message").innerHTML = `tie`;
    }
}





const HAND = ['rock','paper','scissors'];
let playerScore = 0;
let compScore = 0;
let roundCount = 0;

const winText = document.querySelector('.resText');
const scoreText = document.querySelector('.score');

function playerWin(bool){
    if(bool === true){
        playerScore++;
    }else{
        compScore++;
    }
}
function iterRound(){
    roundCount++;
}
function resetScore(){
    playerScore = 0;
    compScore = 0;
    roundCount = 0;
}
function game(){
    if(roundCount == 5){
        if(playerScore > compScore){
            winText.textContent = "Player Wins!";
        }else if(compScore > playerScore){
            winText.textContent = "Comp Wins!";
        }else{
            winText.textContent = "Tie!";
        }
        resetScore();
    }
}
function getCompChoice(){
    let rand = Math.floor(Math.random() * 3);
    return HAND[rand];
};
function sanitizePlayerInput(s){
    return s.toLowerCase();
};
function playAgainstComp(pH){
    let playerHand = sanitizePlayerInput(pH);
    let compHand = getCompChoice();
    switch(playerHand){
        case HAND[0]:
            if(compHand == HAND[0]){
                winText.textContent = `Player: ${playerHand},\nComp: ${compHand},\nTie!`;
            }else if(compHand == HAND[1]){
                playerWin(false);
                winText.textContent = `Player: ${playerHand},\nComp: ${compHand},\nComp wins!`;
            }else if(compHand == HAND[2]){
                playerWin(true);
                winText.textContent = `Player: ${playerHand},\nComp: ${compHand},\nPlayer wins!`;
            }
            break;
        case HAND[1]:
            if(compHand == HAND[0]){
                playerWin(true);
                winText.textContent = `Player: ${playerHand},\nComp: ${compHand},\nPlayer win!`;
            }else if(compHand == HAND[1]){
                winText.textContent = `Player: ${playerHand},\nComp: ${compHand},\nTie!`;
            }else if(compHand == HAND[2]){
                playerWin(false);
                winText.textContent = `Player: ${playerHand},\nComp: ${compHand},\nComp wins!`;
            }
            break;
        case HAND[2]:
            if(compHand == HAND[0]){
                playerWin(false);
                winText.textContent = (`Player: ${playerHand},\nComp: ${compHand},\nComp Wins!`);
            }else if(compHand == HAND[1]){
                playerWin(true);
                winText.textContent = (`Player: ${playerHand},\nComp: ${compHand},\nPlayer Wins!`);
            }else if(compHand == HAND[2]){
                winText.textContent = (`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }
            break;
        default:
            return("ERROR: undefined hand, please choose a valid hand.");
            break;
    }
    iterRound();
    scoreText.textContent = `Player: ${playerScore}, Comp: ${compScore}, Ties: ${roundCount - playerScore - compScore}`;
    game();
};

const rockButton = document.querySelector(`button[data-hand=Rock]`);
const paperButton = document.querySelector(`button[data-hand=Paper]`);
const scissorsButton = document.querySelector(`button[data-hand=Scissors]`);

rockButton.addEventListener('click',function() {
    playAgainstComp("rock");
});
paperButton.addEventListener('click',function(){
    playAgainstComp("paper");
});
scissorsButton.addEventListener('click',function() {
    playAgainstComp("scissors");
});

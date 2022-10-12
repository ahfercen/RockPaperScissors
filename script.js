const HAND = ['rock','paper','scissors'];
let playerScore = 0;
let compScore = 0;
function playerWin(bool){
    if(bool === true){
        playerScore++;
    }else{
        compScore++;
    }
}
function resetScore(){
    playerScore = 0;
    compScore = 0;
}
function game(){
    resetScore();
    for(let round = 0; round <5; round++){
        alert(playAgainstComp(prompt("Rock, Paper, or Scissors?")));
    }
    if(playerScore > compScore){
        alert("Congratulations, you've won!");
    }else{
        alert("You've lost!");
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
                return(`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }else if(compHand == HAND[1]){
                playerWin(false);
                return(`Player: ${playerHand},\nComp: ${compHand},\nComp wins!`);
            }else if(compHand == HAND[2]){
                playerWin(true);
                return(`Player: ${playerHand},\nComp: ${compHand},\nPlayer wins!`);
            }
            break;
        case HAND[1]:
            if(compHand == HAND[0]){
                playerWin(true);
                return(`Player: ${playerHand},\nComp: ${compHand},\nPlayer win!`);
            }else if(compHand == HAND[1]){
                return(`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }else if(compHand == HAND[2]){
                playerWin(false);
                return(`Player: ${playerHand},\nComp: ${compHand},\nComp wins!`);
            }
            break;
        case HAND[2]:
            if(compHand == HAND[0]){
                playerWin(false);
                return(`Player: ${playerHand},\nComp: ${compHand},\nComp Wins!`);
            }else if(compHand == HAND[1]){
                playerWin(true);
                return(`Player: ${playerHand},\nComp: ${compHand},\nPlayer Wins!`);
            }else if(compHand == HAND[2]){
                return(`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }
            break;
        default:
            return("ERROR: undefined hand, please choose a valid hand.");
            break;
    }
};

const rockButton = document.querySelector(`button[data-hand=Rock]`);
const paperButton = document.querySelector(`button[data-hand=Paper]`);
const scissorsButton = document.querySelector(`button[data-hand=Scissors]`);

rockButton.addEventListener('click',function() {
    playAgainstComp("rock");
});
rockButton.addEventListener('click',function(){
    playAgainstComp("paper");
});
rockButton.addEventListener('click',function() {
    playAgainstComp("scissors");
});

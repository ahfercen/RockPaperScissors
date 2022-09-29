const HAND = ['rock','paper','scissors']

function getCompChoice(){
    let rand = Math.floor(Math.random() * 3)
    return HAND[rand]
}

function playAgainstComp(playerHand){
    let compHand = getCompChoice();
    switch(playerHand){
        case HAND[0]:
            if(compHand == HAND[0]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }else if(compHand == HAND[1]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nComp wins!`);
            }else if(compHand == HAND[2]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nPlayer wins!`);
            }
            break;
        case HAND[1]:
            if(compHand == HAND[0]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nPlayer win!`);
            }else if(compHand == HAND[1]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }else if(compHand == HAND[2]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nComp wins!`);
            }
            break;
        case HAND[2]:
            if(compHand == HAND[0]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nComp Wins!`);
            }else if(compHand == HAND[1]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nPlayer Wins!`);
            }else if(compHand == HAND[2]){
                console.log(`Player: ${playerHand},\nComp: ${compHand},\nTie!`);
            }
            break;
        default:
            console.log("ERROR: undefined hand, please choose a valid hand.");
            break;
    }
};

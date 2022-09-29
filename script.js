const HAND = ['rock','paper','scissors']

function getCompChoice(){
    let rand = Math.floor(Math.random() * 3)
    return HAND[rand]
}


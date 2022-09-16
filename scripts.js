function getComputerChoice() {
    let choice = Math.random()

    if (choice >= 0.33 && choice <= 0.66) {
        return choice = 'scissors'
    }
    else if (choice > 0.66) {
        return choice = 'rock'
    }
    else {return choice = 'paper';}
}

//console.log(getComputerChoice())


function playerChoice() {
    let choice = prompt('Choose your weapon!', )
    choice = choice.toLowerCase()
    if (choice != 'rock' && choice != 'scissors' && choice != 'paper') {alert('You need to pick either rock, paper, or scissors!')}
    else {return choice}
}

function playRound() {
    //compares the two inputs from the npc and the player
    //declares who won the round 
    //returns a score somehow 
    let player = playerChoice()
    let npc = getComputerChoice()
    console.log(player)
    console.log(npc)

    if (player = 'rock') {
        switch (npc) {
            case 'scissors':
                //code
                alert('You win! Rock beats Scissors!')
                playerScore = playerScore++;
                break;
            case 'paper':
                //code
                alert('You lose! Paper beats Rock!')
                npcScore = npcScore++;
                break;
            case 'rock':
                //code
                alert('Its a Tie!')
                break;
        }
    }
    else if (player = 'scissors') {
        switch (npc) {
            case 'scissors':
                //code
                alert('Its a Tie!')
                break;
            case 'paper':
                //code
                alert('You win! Scissors beats Paper!')
                playerScore = playerScore++;
                break;
            case 'rock':
                //code
                alert('You lose! Rock beats Scissors!')
                npcScore = npcScore++;
                break;
        }
    }
    else {
        switch (npc) { //player choice is paper
            case 'scissors':
                //code
                alert('You lose! Scissors beats Paper!')
                npcScore = npcScore++;
                break;
            case 'paper':
                //code
                alert('Its a Tie!')
                break;
            case 'rock':
                //code
                alert('You win! Paper beats Rock!')
                playerScore = playerScore++;
                break;
        }
    }
    return 
}

let playerScore = 0;
let npcScore = 0;

function game() {
    //calls the playRound function 5 times and keeps track of the outcome
    //then reveals the winner by comparing the final results
    //uses a loop to keep the game going 
    //not sure yet about score will figure that stuff out later
}


//console.log(playerScore)
//console.log(npcScore)
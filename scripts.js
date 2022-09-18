function npcChoice() {
    let choice = Math.random()

    if (choice >= 0.33 && choice <= 0.66) {
        return choice = 'scissors'
    }
    else if (choice > 0.66) {
        return choice = 'rock'
    }
    else { return choice = 'paper'; }
}

function playerChoice() {
    let choice = prompt('Choose your weapon!',)
    choice = choice.toLowerCase()
    if (choice != 'rock' && choice != 'scissors' && choice != 'paper') { 
        alert('You need to pick rock, paper, or scissors!\nThis rounds choice will be random.') 
        return npcChoice()
    }
    else { return choice }
}

function playRound() {
    //compares the two inputs from the npc and the player
    //declares who won the round 
    //returns a score somehow 
    let player = playerChoice()
    let npc = npcChoice()
    console.log(player)
    console.log(npc)

    if (player === 'rock') {
        switch (npc) {
            case 'scissors':
                alert('You win! Rock beats Scissors!')
                return playerScore++;
            case 'paper':
                alert('You lose! Paper beats Rock!')
                return npcScore++;
            case 'rock':
                alert('Its a Tie!')
                break;
        }
    }
    else if (player === 'scissors') {
        switch (npc) {
            case 'scissors':
                alert('Its a Tie!')
                break;
            case 'paper':
                alert('You win! Scissors beats Paper!')
                return playerScore++;
            case 'rock':
                alert('You lose! Rock beats Scissors!')
                return npcScore++;
        }
    }
    else { //player choice is paper
        switch (npc) { 
            case 'scissors':
                alert('You lose! Scissors beats Paper!')
                return npcScore++;
            case 'paper':
                alert('Its a Tie!')
                break;
            case 'rock':
                alert('You win! Paper beats Rock!')
                return playerScore++;
        }
    }
}
var playerScore = 0;
var npcScore = 0;

function game() {
    //calls the playRound function 5 times 
    //then reveals the winner by comparing the final results
    //keeps track of the outcome
    //uses a loop to keep the game going 
    
    for (let round = 0; round < 5; round++) {
        playRound()
    }

    findWinner()
}

function findWinner() {
    if (playerScore > npcScore) {
        alert('You win the game! \nPlayer = ' + playerScore + '\nNPC = ' + npcScore)
    }
    else if (npcScore > playerScore) {
        alert('You lose the game! \nPlayer = ' + playerScore + '\nNPC = ' + npcScore)
    }
    else {
        alert('You tied the game! \nPlayer = ' + playerScore + '\nNPC = ' + npcScore)
    }
}

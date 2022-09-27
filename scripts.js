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

var playerScore = 0;
var npcScore = 0;

function findWinner() {
    if ((playerScore === 5) || (npcScore === 5)) {
        if (playerScore > npcScore) {
            dialog.textContent = 'You win the game!';
            npcScore = 0;
            playerScore = 0;
        }
        else if (npcScore > playerScore) {
            dialog.textContent = 'You lose the game!';
            npcScore = 0;
            playerScore = 0;
        }
        else if (npcScore === playerScore) {
            dialog.textContent = 'You tied the game!';
            npcScore = 0;
            playerScore = 0;
        }
    } 
    else return;
}

function playRock() {
    switch (npcChoice()) {
        case 'scissors':
            dialog.textContent = 'You win! Rock beats Scissors!';
            return playerScore++;
        case 'paper':
            dialog.textContent = 'You lose! Paper beats Rock!';
            return npcScore++;
        case 'rock':
            dialog.textContent = 'Its a Tie!';
            break;
    }
}

function playScissors() {
    switch (npcChoice()) {
        case 'scissors':
            dialog.textContent = 'Its a Tie!';
            break;
        case 'paper':
            dialog.textContent = 'You win! Scissors beats Paper!';
            return playerScore++;
        case 'rock':
            dialog.textContent = 'You lose! Rock beats Scissors!';
            return npcScore++;
    }
}

function playPaper() {
    switch (npcChoice()) {
        case 'scissors':
            dialog.textContent = 'You lose! Scissors beats Paper!';
            return npcScore++;
        case 'paper':
            dialog.textContent = 'Its a Tie!';
            break;
        case 'rock':
            dialog.textContent = 'You win! Paper beats Rock!';
            return playerScore++;
    }
}

function selection(e) {
    if (e.target.alt === 'Rock') playRock(); //return console.log('rock');
    else if (e.target.alt === 'Scissors') playScissors(); //return console.log('scissors');
    else if (e.target.alt === 'Paper') playPaper();//return console.log('paper');
    else return;
    scoreNpc.textContent = `${npcScore}`;
    scorePlayer.textContent = `${playerScore}`;
    findWinner()
}
const scoreBoard = document.querySelector('.dialog');
const dialog = document.createElement('div');
dialog.classList.toggle('dialogContent');
dialog.textContent = 'Pick a weapon to start the game.'
scoreBoard.appendChild(dialog);

const scoreNpc = document.querySelector('#npc');
const scorePlayer = document.querySelector('#player');

const options = document.querySelectorAll('.options');
let choice = options.forEach(addEventListener('click', selection));
console.log(choice);
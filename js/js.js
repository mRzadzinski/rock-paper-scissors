// Randomly generate rock, paper or scissors for computer
function computerPlay() {
    let randomInt = getRandomInt();
    if (randomInt >= 0 && randomInt <= 2) {
        return "Rock";
    } else if (randomInt >= 3 && randomInt <= 5) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Get random number between 0-8
function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

// Get player's input, case insensitive
function playerSelection() {
    let input = prompt('Rock, paper or scissors?');
    input = input.toLowerCase();
    console.log(input);
    if (input === 'rock') {
        return 'Rock';
    } else if (input === 'paper') {
        return 'Paper';
    } else if (input === 'scissors') {
        return 'Scissors';
    }
}



function playRound(playerSelection(), computerPlay()) {
    
}
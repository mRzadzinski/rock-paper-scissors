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
    let input = prompt('Choose: rock, paper or scissors');
    if (input === null) {
        return 'You cancelled whole operation';
    }
    // Convert input to lower case
    input = input.toLowerCase();
    console.log(input);

    if (input === 'rock') {
        return 'Rock';
    } else if (input === 'paper') {
        return 'Paper';
    } else if (input === 'scissors') {
        return 'Scissors';
    } else 
    alert('Invalid input, type in: rock, paper or scissors. Please start again');
    let handleInvalid = playerSelection();
    return handleInvalid;  
}

let player;
let computer;

// Play a round of the game, return result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beat Paper';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beat Paper';
    } else if (playerSelection === computerSelection) {
        return 'Tie!';
    } else {
        return;
    }
}

// Play one full game including getting input from user and computer selection
function oneGame() {
    player = window.playerSelection();
    if (player === 'You cancelled whole operation') {
        return player;
    }

    computer = window.computerPlay();
    console.log('Computer: ' + computer);

    return window.playRound(player, computer);
}

// Play 5 rounds, keep score and report winner or loser
function game() {
    // Score variables
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Get input for new round
        player = window.playerSelection();
        // Abort if prompt cancelled
        if (player === 'You cancelled whole operation') {
            return player;
        }

        computer = window.computerPlay();
        console.log('Computer: ' + computer);

        // Who won round
        let winner = playRound(player, computer);

        // Print who won round
        console.log(winner);

        // Track score
        if (winner.slice(0, 7) === 'You Win') {
            playerScore++;
        } else if (winner.slice(0, 8) === 'You Lose') {
            computerScore++;
        }

        // If it was a last round print score and winner
        if (i === 4) {
            console.log('Your score: ' + playerScore + '\nComputer score:' + computerScore);

            if (playerScore === computerScore) {
                return('Tie!');
            } else if (playerScore > computerScore) {
                return('You Win!');
            } else if (playerScore < computerScore) {
                return('You Lose!');
            }
        }
    }
    return;
}
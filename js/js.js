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
console.log('You: ' + player);
let computer;
console.log('Computer: ' + computer);


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

// Call playerSelection and computerPlay to update variables 
// before playing a round and playRound
function oneGame() {
    player = window.playerSelection();
    console.log('You: ' + player);

    computer = window.computerPlay();
    console.log('Computer: ' + computer);

    return window.playRound(player, computer);
}

// Play 5 rounds, keep score and report loser and winner

// get new playerSelection and computerPlay - update variables
// create variables for player and computer scores
// make loop to repeat task below 5 times:
// call play Round
// increment relevant variable
// if it's the last round, print score and winner
function game() {
    player = window.playerSelection();
    console.log('You: ' + player);

    computer = window.computerPlay();
    console.log('Computer: ' + computer);
}
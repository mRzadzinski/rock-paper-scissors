const audio = document.querySelector('audio');
let playerScore = 0;
let computerScore = 0;

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

// Select regular bar
let barRegular = document.querySelector('#bar-regular');
regularWidth = 0;
barRegular.style.width = `${regularWidth}%`;
// Select reversed bar
let barReversed = document.querySelector('#bar-reversed');
reversedWidth = 0;
barReversed.style.width = `${reversedWidth}%`;

window.addEventListener('keydown', playGame);
window.addEventListener('click', playGame);

function playGame(e) {

    // Timeout to prevent overlapping effects
    removeListeners()
    timeout = setTimeout(addListeners, 500);

    let player = getPlayerInput(e);
    let computer = computerPlay();
    let winner = playRound(player, computer);

    // Select images to modify
    if (player === undefined) return;
    let playerImage = document.querySelector(`.${player.toLowerCase()}.human`);
    let computerImage = document.querySelector(`.${computer.toLowerCase()}.computer`);

    if (winner.toLowerCase().includes('win')) {
        playAudio()
        playerScore++;

        // Add effects to images
        playerImage.classList.add('red');
        computerImage.classList.add('red');

        // Modify player score bar width
        regularWidth += 20;
        barRegular.style.width = `${regularWidth}%`;

    } else if (winner.toLocaleLowerCase().includes('lose')) {
        playAudio()
        computerScore++;

        playerImage.classList.add('red');
        computerImage.classList.add('green');

        reversedWidth += 20;
        barReversed.style.width = `${reversedWidth}%`;

    } else if (winner.toLocaleLowerCase().includes('tie')) {
        playAudio()

        playerImage.classList.add('blue');
        computerImage.classList.add('blue');
    } 

    if (playerScore >= 5) {
        humanWon();
    } else if (computerScore >= 5) {
        computerWon();
    }
}

function humanWon() {
    clearTimeout(timeout);

    removeListeners()

    stopRemovingEffects()

    resetClasses()

    let humanButton = document.querySelectorAll('.human');
    humanButton.forEach(button => button.classList.add('green'));

    let computerButton = document.querySelectorAll('.computer');
    computerButton.forEach(button => button.classList.add('red'));
}

function computerWon() {
    clearTimeout(timeout);

    removeListeners()

    stopRemovingEffects()

    resetClasses()

    let humanButton = document.querySelectorAll('.human');
    humanButton.forEach(button => button.classList.add('red'));

    let computerButton = document.querySelectorAll('.computer');
    computerButton.forEach(button => button.classList.add('green'));
}

function removeListeners() {
    window.removeEventListener('keydown', playGame);
    window.removeEventListener('click', playGame);
}

function addListeners() {
    window.addEventListener('keydown', playGame);
    window.addEventListener('click', playGame);
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
}

function stopRemovingEffects() {
    buttons.forEach(button => button.removeEventListener('transitionend', removeTransition));
}

function resetClasses() {
    buttons.forEach(button => button.classList.remove('green', 'red', 'blue'));
}

function getPlayerInput(e) {
    let player;
    if (e.code === 'KeyQ') {
        player = 'Rock';
        return player;
    } else if (e.code === 'KeyW') {
        player = 'Paper';
        return player;
    } else if (e.code === 'KeyE') {
        player = 'Scissors';
        return player;
    } else if (e.target.classList.contains('KeyQ')) {
        player = 'Rock';
        return player;
    } else if (e.target.classList.contains('KeyW')) {
        player = 'Paper';
        return player;
    } else if (e.target.classList.contains('KeyE')) {
        player = 'Scissors';
        return player;
    } else return;
}

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

function playAudio() {
    audio.currentTime = 0; 
    audio.play();
}

// When transition ends, remove effect
let buttons = document.querySelectorAll('.gameplay-image');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    this.classList.remove('green');
    this.classList.remove('red');
    this.classList.remove('blue');
    this.classList.remove('git');
}

// Restart button functionality
let restart = document.querySelector('#restart');
restart.addEventListener('click', restartAll);

function restartAll() {
    playerScore = 0;
    computerScore = 0;

    addListeners()

    // Reset score bar length
    regularWidth = 0;
    barRegular.style.width = `${regularWidth}%`;
    reversedWidth = 0;
    barReversed.style.width = `${reversedWidth}%`;

    resetClasses()
}

// Github icon animation
const git = document.querySelector('#github');
git.addEventListener('mouseover', (e) => git.classList.add('git'));
git.addEventListener('mouseleave', (e) => git.classList.remove('git'));
// Get random number between 0-8
function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

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

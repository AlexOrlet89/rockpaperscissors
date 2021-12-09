export function score(player, computer) {
    if (player === computer) {
        return 'tie';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'computer wins';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'player wins';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'computer wins';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'player wins';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'player wins';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'computer wins';
    }

}

const throws = ['rock', 'paper', 'scissors'];

export function generateThrow() {
    const index = getRandomIntInclusive(0, 2);
    return throws[index];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
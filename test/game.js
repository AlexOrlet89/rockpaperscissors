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
export function score(player, computer) {
    if (player === 'rock' && computer === 'rock') {
        return 'tie';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'computer wins';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'player wins';
    }
}
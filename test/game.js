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
}
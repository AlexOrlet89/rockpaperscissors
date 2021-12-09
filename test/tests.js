// IMPORT MODULES under test here:
import { score } from '../test/game.js';

const test = QUnit.test;

test('player rock, computer rock is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';

    //Act 
    // Call the function you're testing and set the result to a const

    const actual = score(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result

    expect.equal(actual, expected);

});

test('player scissors, computer rock is computer wins', (expect) => {
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'computer wins';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player scissors, computer paper is player wins', (expect) => {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'player wins';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

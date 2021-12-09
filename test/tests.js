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

test('player scissors, computer scissors is tie', (expect) => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'tie';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player rock, computer paper is computer wins', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer wins';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player rock, computer scissors is player wins', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player wins';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});
test('player paper, computer rock is player wins', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'player wins';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});
test('player paper, computer scissors is computer wins', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'computer wins';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

test('player paper, computer paper is tie', (expect) => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie';

    const actual = score(player, computer);

    expect.equal(actual, expected);
});

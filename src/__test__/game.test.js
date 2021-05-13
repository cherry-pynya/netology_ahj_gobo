import Game from '../js/game';

test('error', () => {
    expect(() => {
        const game = new Game('blabla', 4);
    }).toThrow();
});
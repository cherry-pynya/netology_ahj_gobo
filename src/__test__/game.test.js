import Game from '../js/game';

test('error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const game = new Game('blabla', 4);
  }).toThrow();
});

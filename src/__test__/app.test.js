import demo from '../js/app';

test('first test', () => {
  const val = demo('bzzz');
  expect(val).toBe('bzzz');
});

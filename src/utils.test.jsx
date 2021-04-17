import get from './utils';

test('get', () => {
  const state = {
    name: '김홍중',
  };

  const getName = get('name');

  expect(getName(state)).toBe('김홍중');
});

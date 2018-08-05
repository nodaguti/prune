import test from 'ava';
import { getDayFormat } from '../util';

test('util:getDayFormat with no parameter', (t) => {
  const now = new Date();
  const expected = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  t.is(getDayFormat(), expected);
});

test('util:getDayFormat with date parameter', (t) => {
  const date = new Date(2018, 2, 9);

  t.is(getDayFormat(date), '2018-3-9');
});

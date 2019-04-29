import test from 'ava';
import plus from '@/plus';

test('Given a = 5 And b = 6, When plus(), Then result to be 11', t => {
  const result = plus(5, 6);
  // 👎 做法：
  console.log(result);
  // 👍 做法：
  t.is(result, 11);
});

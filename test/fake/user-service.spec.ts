import test from 'ava';
import UserService from '@/fake/user-service';
import UserRepositoryFake from '@/fake/user-repository-fake';

test('Given UserService, When userService.get(), Then result to be [A, B]', async t => {
  const userService = new UserService(new UserRepositoryFake());
  const result = await userService.get();
  t.deepEqual(result, ['A', 'B']);
});

test('Given UserService, When userService.save(C), Then result to be [A, B, C]', async t => {
  const userService = new UserService(new UserRepositoryFake());
  await userService.save('C');
  const result = await userService.get();
  t.deepEqual(result, ['A', 'B', 'C']);
});

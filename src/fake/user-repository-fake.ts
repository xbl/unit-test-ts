import Repository from './repository';

export default class UserRepositoryFake implements Repository {
  users = ['A', 'B'];

  get() {
    return new Promise((resolve) => {
      resolve(this.users);
    });
  }

  save(user: any) {
    return new Promise((resolve) => {
      this.users.push(user);
      resolve();
    });
  }
}

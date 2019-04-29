import Repository from './repository';

export class UserRepository implements Repository {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['H', 'E', 'L', 'L', 'O']);
      }, 30000);
    });
  }

  save(user: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30000);
    });
  }
}

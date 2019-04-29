import Repository from './repository';

export default class UserService {
  repository: Repository

  constructor(repository: Repository) {
    this.repository = repository;
  }

  save(user) {
    this.repository.save(user);
  }

  get() {
    return this.repository.get();
  }
}

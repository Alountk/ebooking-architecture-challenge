import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(() => {
    repository = new UserRepository();
  });

  it('should filter user by name query', async () => {
    const name = 'Leanne Graham';

    const results = await repository.search({ name });

    expect(results).toHaveLength(1);
    expect(results[0].name).toBe(name);
  });
});

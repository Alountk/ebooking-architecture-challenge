import { SearchFilters, User } from '../domain/user';
import { IUserRepository } from '../domain/user.repository';

export class SearchUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(filters: SearchFilters): Promise<User[]> {
    // Here we could add business logic, logging, or analytics
    return this.userRepository.search(filters);
  }
}

import type { SearchFilters, User } from './user';

export interface IUserRepository {
  search(filters: SearchFilters): Promise<User[]>;
}

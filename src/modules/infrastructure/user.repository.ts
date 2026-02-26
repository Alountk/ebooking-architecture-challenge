import type { SearchFilters, User } from '../domain/user';
import type { IUserRepository } from '../domain/user.repository';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async search(filters: SearchFilters): Promise<User[]> {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    if (result.status !== 200) {
      throw new Error('Failed to fetch users');
    }
    const data = await result.json();
    this.users = data;
    return this.users.filter((user) => {
      if (
        filters.name !== undefined &&
        !user.name.toLowerCase().includes(filters.name.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.email !== undefined &&
        !user.email.toLowerCase().includes(filters.email.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.phone !== undefined &&
        !user.phone.toLowerCase().includes(filters.phone.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.website !== undefined &&
        !user.website.toLowerCase().includes(filters.website.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.company !== undefined &&
        !user.company.name.toLowerCase().includes(filters.company.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }
}

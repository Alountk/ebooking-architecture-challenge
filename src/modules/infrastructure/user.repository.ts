import type { SearchFilters, User } from '../domain/user';
import type { IUserRepository } from '../domain/user.repository';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  private matches(value: string, filterValue?: string): boolean {
    if (!filterValue) {
      return true;
    }
    return value.toLowerCase().includes(filterValue.toLowerCase());
  }

  async search(filters: SearchFilters): Promise<User[]> {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    if (result.status !== 200) {
      throw new Error('Failed to fetch users');
    }
    const data = await result.json();
    this.users = data;

    return this.users.filter((user) => {
      return (
        this.matches(user.name, filters.name) &&
        this.matches(user.email, filters.email) &&
        this.matches(user.phone, filters.phone) &&
        this.matches(user.website, filters.website) &&
        this.matches(user.company.name, filters.company)
      );
    });
  }
}

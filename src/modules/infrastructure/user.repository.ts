import type { SearchFilters, User } from '../domain/user';
import type { IUserRepository } from '../domain/user.repository';

export class UserRepository implements IUserRepository {
  private cachedUsers: User[] | null = null;

  private matches(value: string, filterValue?: string): boolean {
    if (!filterValue) {
      return true;
    }
    return value.toLowerCase().includes(filterValue.toLowerCase());
  }

  async search(filters: SearchFilters): Promise<User[]> {
    // Si no hay caché, hacemos el fetch una única vez
    if (!this.cachedUsers) {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!result.ok) {
        throw new Error('No se pudieron obtener los usuarios del servidor');
      }

      this.cachedUsers = await result.json();
    }

    // Filtramos siempre sobre los datos en caché
    return (this.cachedUsers || []).filter((user) => {
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

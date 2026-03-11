import { useEffect, useState } from 'react';

import { useUserContext } from '@/hooks/useUserContext';

import { SearchFilters, User } from '../domain/user';

export default function useUsers({ filters }: { filters: SearchFilters }) {
  const { searchUsersUseCase } = useUserContext();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filtersKey = JSON.stringify(filters);

  useEffect(() => {
    let ignore = false;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        // Llamada al caso de uso, no al repositorio directamente
        const result = await searchUsersUseCase.execute(filters);

        if (!ignore) {
          setUsers(result);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Error inesperado');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      ignore = true;
    };
    // We use filtersKey to avoid re-fetching when the object reference changes but content stays the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey, searchUsersUseCase]);

  return { users, loading, error };
}

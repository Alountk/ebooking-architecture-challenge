import { useEffect, useState } from 'react';

import { useUserContext } from '@/hooks/useUserContext';

import { SearchFilters, User } from '../domain/user';

export default function useUsers({ filters }: { filters: SearchFilters }) {
  const { repository } = useUserContext();
  const [users, setUsers] = useState<User[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    setLoading(true);

    repository.search(filters).then((result) => {
      if (!ignore) {
        setUsers(result);
        setLoading(false);
      }
    });

    return () => {
      ignore = true;
    };
    // We stringify filters to avoid unnecessary calls due to object reference changes. In a real app, consider using a stable reference for filters or a deep comparison.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters), repository]);

  return { users, loading };
}

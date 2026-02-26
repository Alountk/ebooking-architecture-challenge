import { useEffect, useState } from 'react';

import { useUserContext } from '@/hooks/useUserContext';

import { SearchFilters, User } from '../domain/user';

export default function useUsers({ filters }: { filters: SearchFilters }) {
  const { repository } = useUserContext();
  console.log({ repository });
  const [users, setUsers] = useState<User[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    // SHAME I check this part but I no have enough time
    // eslint-disable-next-line
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
  }, [filters, repository]);

  return { users, loading };
}

import { useDeferredValue, useMemo, useState } from 'react';

import { useUrlSync } from '@/hooks/useUrlSync';

import { User } from '../domain/user';

import UserDetail from './UserDetail';
import UserList from './UserList';
import useUsers from './useUsers';

export default function UserDashboard() {
  const [name, setName] = useUrlSync('q', '');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const deferredName = useDeferredValue(name);
  const filters = useMemo(() => ({ name: deferredName }), [deferredName]);

  const { users, loading } = useUsers({ filters });
  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Search users...'
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#efefef',
          padding: '1rem',
          zIndex: 10,
          paddingTop: '1rem',
          paddingBottom: '1rem',
          marginBottom: '1rem',
          borderBottom: '1px solid #eee',
        }}
      />
      <UserList users={users} loading={loading} onSelectUser={setSelectedUser} />

      <UserDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
    </>
  );
}

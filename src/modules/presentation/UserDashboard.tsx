import { useDeferredValue, useMemo, useState } from 'react';

import { User } from '../domain/user';

import UserDetail from './UserDetail';
import UserList from './UserList';
import useUsers from './useUsers';

export default function UserDashboard() {
  const [name, setName] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const deferredName = useDeferredValue(name);
  const filters = useMemo(() => ({ name: deferredName }), [deferredName]);

  const { users, loading } = useUsers({ filters });
  console.log({ users, loading });
  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Search hotels...'
        style={{
          padding: '0.5rem',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '400px',
          fontSize: '1rem',
        }}
      />
      <UserList users={users} loading={loading} onSelectUser={setSelectedUser} />

      <UserDetail
        user={selectedUser}
        onClose={() => setSelectedUser(null)} // Conectamos el cierre
      />
    </>
  );
}

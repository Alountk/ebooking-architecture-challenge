import { useDeferredValue, useMemo, useState } from 'react';

import { useUrlSync } from '@/hooks/useUrlSync';

import { User } from '../domain/user';

import UserDetail from './UserDetail';
import UserList from './UserList';
import useUsers from './useUsers';
import './styles.css';

export default function UserDashboard() {
  const [name, setName] = useUrlSync('q', '');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const deferredName = useDeferredValue(name);
  const filters = useMemo(() => ({ name: deferredName }), [deferredName]);

  const { users, loading, error } = useUsers({ filters });

  return (
    <div className='dashboard-container'>
      <header>
        <h1>Directorio de Usuarios</h1>
        <input
          type='text'
          className='search-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Buscar por nombre...'
          aria-label='Buscar usuarios'
        />
      </header>

      <main>
        {error && (
          <div className='error-message'>
            <strong>Error:</strong> {error}
            <p>Por favor, comprueba tu conexión e inténtalo de nuevo.</p>
          </div>
        )}

        <UserList users={users} loading={loading} onSelectUser={setSelectedUser} />
      </main>

      <UserDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
}

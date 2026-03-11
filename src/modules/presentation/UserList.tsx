import { User } from '../domain/user';

import UserCard from './UserCard';

interface UserListProps {
  users: User[];
  loading: boolean;
  onSelectUser: (user: User) => void;
}

export default function UserList({ users, loading, onSelectUser }: UserListProps) {
  if (loading && users.length === 0) {
    return <div className='status-message'>Loading users...</div>;
  }

  if (!loading && users.length === 0) {
    return <div className='status-message'>No users found matching your search.</div>;
  }

  return (
    <div className='user-grid'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelect={onSelectUser} />
      ))}
    </div>
  );
}

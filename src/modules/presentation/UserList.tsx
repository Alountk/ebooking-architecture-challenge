import { User } from '../domain/user';

import UserCard from './UserCard';

interface UserListProps {
  users: User[];
  loading: boolean;
  onSelectUser: (user: User) => void;
}

export default function UserList({ users, loading, onSelectUser }: UserListProps) {
  if (loading) return <div>Loading users...</div>;
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelect={() => onSelectUser(user)} />
      ))}
    </div>
  );
}

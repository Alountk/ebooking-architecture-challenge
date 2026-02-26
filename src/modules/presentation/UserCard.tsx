import { User } from '../domain/user';

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
}

export default function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div
      onClick={() => onSelect(user)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect(user);
      }}
      role='button'
      tabIndex={0}
      style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem', cursor: 'pointer' }}
    >
      <h3>{user.name}</h3>
      <p>📧 {user.email}</p>
      <p>📍 {user.address.city}</p>
    </div>
  );
}

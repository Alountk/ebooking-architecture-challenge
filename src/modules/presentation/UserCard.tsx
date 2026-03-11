import { User } from '../domain/user';

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
}

export default function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <button
      className='user-card'
      onClick={() => onSelect(user)}
      type='button'
      aria-label={`Ver detalles de ${user.name}`}
    >
      <h3>{user.name}</h3>
      <p>
        <span>📧</span> {user.email}
      </p>
      <p>
        <span>📍</span> {user.address.city}
      </p>
      <p>
        <span>🏢</span> {user.company.name}
      </p>
    </button>
  );
}

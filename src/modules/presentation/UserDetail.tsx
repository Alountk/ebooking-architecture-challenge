/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { User } from '../domain/user';

interface UserDetailProps {
  user: User | null;
  onClose: () => void;
}

export default function UserDetail({ user, onClose }: UserDetailProps) {
  if (!user) return null;

  return (
    <div
      className='modal-overlay'
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
      role='dialog'
      aria-modal='true'
      tabIndex={-1}
    >
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
        onKeyDown={(e) => e.stopPropagation()}
        role='document'
      >
        <button className='close-btn' onClick={onClose} aria-label='Cerrar detalle'>
          ✖
        </button>

        <h2>{user.name}</h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <hr style={{ margin: '1.5rem 0', opacity: 0.1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>
            <strong>📞 Teléfono:</strong> {user.phone}
          </p>
          <p>
            <strong>🌐 Website:</strong>{' '}
            <a href={`http://${user.website}`} target='_blank' rel='noreferrer'>
              {user.website}
            </a>
          </p>
          <p>
            <strong>🏢 Compañía:</strong> {user.company.name}
          </p>
          <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
            &quot;{user.company.catchPhrase}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

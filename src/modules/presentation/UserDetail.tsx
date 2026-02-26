// SHAME: HUSKY and LINT V.v

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
      role='dialog'
      aria-modal='true'
      tabIndex={-1}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
          position: 'relative',
          color: '#333',
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role='document'
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
          aria-label='Cerrar detalle'
        >
          ✖
        </button>

        <h2>{user.name}</h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <hr />

        <div style={{ marginTop: '1rem' }}>
          <p>
            📞 <strong>Teléfono:</strong> {user.phone}
          </p>
          <p>
            🌐 <strong>Website:</strong>{' '}
            <a href={`http://${user.website}`} target='_blank' rel='noreferrer'>
              {user.website}
            </a>
          </p>
          <p>
            🏢 <strong>Compañía:</strong> {user.company.name}
          </p>
          <p>
            <em>&quot;{user.company.catchPhrase}&quot;</em>
          </p>
        </div>
      </div>
    </div>
  );
}

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UserRepository;

  const mockUsers = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      company: { name: 'Romaguera-Crona' },
    },
  ];

  beforeEach(() => {
    repository = new UserRepository();
    // Limpiamos el fetch global antes de cada test
    vi.stubGlobal('fetch', vi.fn());
  });

  it('debería llamar a la red solo una vez y luego usar el caché', async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    } as Response);

    // Primera llamada
    await repository.search({});
    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Segunda llamada: no debería llamar a fetch de nuevo
    await repository.search({ name: 'Leanne' });
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('debería lanzar un error si la red falla', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
    } as Response);

    await expect(repository.search({})).rejects.toThrow('No se pudieron obtener los usuarios');
  });
});

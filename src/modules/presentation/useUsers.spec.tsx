import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { UserProvider } from '@/context/UserContext';

import useUsers from './useUsers';

// Mock the UseCase instead of the Repository for cleaner hook testing
const mockExecute = vi.fn();

vi.mock('@/modules/application/search-users.use-case', () => {
  return {
    SearchUsersUseCase: class {
      execute = mockExecute;
    },
  };
});

describe('useUsers Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <UserProvider>{children}</UserProvider>
  );

  it('should fetch users on mount and handle loading state', async () => {
    const mockUsers = [{ id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' }];
    mockExecute.mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers({ filters: {} }), { wrapper });

    expect(result.current.loading).toBe(true);
    expect(result.current.users).toEqual([]);

    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.users).toEqual(mockUsers);
    expect(mockExecute).toHaveBeenCalledWith({});
  });

  it('should handle errors correctly', async () => {
    const errorMessage = 'Network error';
    mockExecute.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useUsers({ filters: {} }), { wrapper });

    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(errorMessage);
    expect(result.current.users).toEqual([]);
  });
});

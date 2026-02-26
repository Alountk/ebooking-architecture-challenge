import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { UserProvider } from '@/context/UserContext';

import useUsers from './useUsers';
const mockSearch = vi.fn();

vi.mock('@/modules/infrastructure/user.repository', () => {
  return {
    UserRepository: class {
      search = mockSearch;
    },
  };
});

describe('useUsers Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch users on mount and handle loading state', async () => {
    // PREPARE DATA
    const mockUsers = [{ id: 1, name: 'Leanne Graham Doe', email: 'Sincere@april.biz' }];
    mockSearch.mockResolvedValue(mockUsers);

    // RENDER HOOK IJNTO PROVIDER
    const wrapper = ({ children }: { children: ReactNode }) => (
      <UserProvider>{children}</UserProvider>
    );

    const { result } = renderHook(() => useUsers({ filters: {} }), { wrapper });

    // VERIFY INITIAL STATE
    expect(result.current.loading).toBe(true);
    expect(result.current.users).toEqual([]);

    // WAIT FOR EFFECT TO COMPLETE
    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // VERIFY FINAL STATE
    expect(result.current.users).toEqual(mockUsers);
    expect(mockSearch).toHaveBeenCalledWith({});
  });
});

import { ReactNode, useMemo } from 'react';

import { SearchUsersUseCase } from '@/modules/application/search-users.use-case';
import { UserRepository } from '@/modules/infrastructure/user.repository';

import { UserContext } from './UserContext.create';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Inicializamos las dependencias una sola vez para mantener la estabilidad
  const searchUsersUseCase = useMemo(() => {
    const repository = new UserRepository();
    return new SearchUsersUseCase(repository);
  }, []);

  return <UserContext.Provider value={{ searchUsersUseCase }}>{children}</UserContext.Provider>;
};

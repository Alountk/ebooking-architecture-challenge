import { ReactNode, useMemo } from 'react';

import { UserRepository } from '@/modules/infrastructure/user.repository';

import { UserContext } from './UserContext.create';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const repository = useMemo(() => new UserRepository(), []);

  return <UserContext.Provider value={{ repository }}>{children}</UserContext.Provider>;
};

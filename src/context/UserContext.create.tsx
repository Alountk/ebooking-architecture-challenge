import { createContext } from 'react';

import { IUserRepository } from '@/modules/domain/user.repository';

interface UserContextProps {
  repository: IUserRepository;
}

export const UserContext = createContext<UserContextProps | null>(null);

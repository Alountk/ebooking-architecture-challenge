import { createContext } from 'react';

import { SearchUsersUseCase } from '@/modules/application/search-users.use-case';

interface UserContextProps {
  searchUsersUseCase: SearchUsersUseCase;
}

export const UserContext = createContext<UserContextProps | null>(null);

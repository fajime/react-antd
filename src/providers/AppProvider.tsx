/* eslint-disable key-spacing */
import React, { createContext, ReactNode, useContext, useState } from 'react';

type AppContextProps = {
  user: string;
  changeUser(user: any): void;
};

type IProps = {
  children: ReactNode;
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
const AppContext = createContext<AppContextProps>({ user: 'Anonimo', changeUser: () => {} });

export const AppProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<string>('Anonimo');
  const changeUser = (user: any) => {
    setUser(user);
  };

  return <AppContext.Provider value={{ user, changeUser }}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);

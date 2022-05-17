/* eslint-disable key-spacing */
import React, { createContext, ReactNode, useContext } from 'react';

type AppContextProps = {
  user: string;
};

type IProps = {
  children: ReactNode;
};
const initContext: AppContextProps = { user: 'Anonimo' };
const AppContext = createContext<AppContextProps>(initContext);

export const AppProvider = ({ children }: IProps) => {
  return <AppContext.Provider value={initContext}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);

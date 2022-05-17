import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { RootState } from './../../store/store';
import { useAppSelector } from './../../hooks/useStore';

import { useAppContext } from './../../providers/AppProvider';

export const Menu = () => {
  const { user } = useAppContext();
  const [userMenu, setUserMenu] = useState<string>(user);
  const { name } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const setUser = name ? name : user;
    setUserMenu(setUser);
  });

  return (
    <Layout className="content-links">
      <NavLink to="/login" className="link-text">
        Login
      </NavLink>
      <NavLink to="/home" className="link-text">
        Home
      </NavLink>
      <NavLink to="/usuarios" className="link-text">
        Usuarios
      </NavLink>
      <h2>{userMenu}</h2>
    </Layout>
  );
};

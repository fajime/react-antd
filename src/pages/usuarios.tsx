/* eslint-disable key-spacing */
import { useState } from 'react';
import { Content, Header } from './../ant-modules';
import { TablaUsuarios } from './../components';

export const Usuarios = () => {
  const [user, setUser] = useState<any>(null);

  const handleUser = (user: any) => {
    setUser(user);
  };

  return (
    <>
      <Header style={{ color: 'white', minHeight: '3  rem' }}>
        <span>Seleccionado: </span>
        {user && (
          <>
            {user.name} - {user.email}
          </>
        )}
      </Header>

      <Content className="content-tabla">
        <TablaUsuarios onClick={handleUser}></TablaUsuarios>
      </Content>
    </>
  );
};

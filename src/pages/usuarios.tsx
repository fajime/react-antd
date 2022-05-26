/* eslint-disable key-spacing */
import { useEffect, useState } from 'react';
import { useAppContext } from './../providers/AppProvider';
import { Col, Content, Header, Row } from './../ant-modules';
import { DlInput, TablaUsuarios } from './../components';
import { addUsers } from './../store/actions/authActions';
import { useAppDispatch, useAppSelector } from './../hooks/useStore';
import { RootState } from './../store/store';

export const Usuarios = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<any>(null);
  const [usersOrigin, setUsersOrigin] = useState<any>(null);
  const { users } = useAppSelector((state: RootState) => state.auth);

  const { changeUser } = useAppContext();
  useEffect(() => {
    setUsersOrigin(users);
  }, [usersOrigin]);

  const handleUser = (userSelect: any) => {
    changeUser(userSelect.username);
    setUser(userSelect);
  };
  const searchUsers = (event: any) => {
    const { value } = event.target;

    const result = users.filter((user: any) => {
      return user.name.includes(value) || user.username.includes(value) || user.email.includes(value);
    });

    if (result.length > 0) {
      dispatch(addUsers(result));
    }
  };

  return (
    <>
      <Header style={{ color: 'white', minHeight: '3  rem' }}>
        <Row justify="space-between">
          <Col>
            {user && (
              <strong>
                {user.name} - {user.email}
              </strong>
            )}
          </Col>
          <Col>
            <DlInput placeholder="Buscar" onChange={searchUsers} />
          </Col>
        </Row>
      </Header>

      <Content className="content-tabla">
        <TablaUsuarios onClick={handleUser}></TablaUsuarios>
      </Content>
    </>
  );
};

/* eslint-disable key-spacing */
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ComponentsWrapper, ListComponents } from './../components';
import { Content, Layout, Sider } from './../ant-modules';

export const Home = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [listado] = useState<string[]>(['menu', 'input', 'button', 'spinner']);
  const [loadedComponent, setCompo] = useState<string>('');

  const setComponent = (data: string) => {
    setCompo(data);
    setLoad(true);
  };

  return (
    <>
      <Layout className="home-layout">
        <Sider className="content-sider">
          <ListComponents components={listado} setComp={setComponent} />
        </Sider>
        <Content className="content-components">
          <div className="content-links sublinks">
            <NavLink to="/home/canvas" className="link-text">
              Canvas
            </NavLink>
            <NavLink to="/home/docs" className="link-text">
              Docs
            </NavLink>
            <NavLink to="/home/tools" className="link-text">
              Tools
            </NavLink>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
          <div className="comps-wrapper">{load && <ComponentsWrapper component={loadedComponent} />}</div>
        </Content>
      </Layout>
    </>
  );
};

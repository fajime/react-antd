import { ReactNode, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ComponentsWrapper, ListComponents } from './../components';
import { Col, Content, Layout, Row, Sider } from './../ant-modules';

import * as dl from './../components/dl';

export const Home = () => {
  const [listado, setListado] = useState<string[]>(['']);
  const [loadedComponent, setCompo] = useState<ReactNode>(null);

  useEffect(() => {
    const keys = Object.keys(dl);

    const lista = keys.map((key: string) => {
      return key.replace('Dl', 'dl-').toLowerCase();
    });
    setListado(lista);
  }, [dl]);

  const setComponent = (data: string) => {
    setCompo(data);
  };

  return (
    <Layout className="home-layout">
      <Sider className="content-sider">
        <Row justify="center">
          <Col span={24}>
            <ListComponents components={listado} setComp={setComponent} />
          </Col>
        </Row>
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
        <Row justify="center">
          <Col className="comps-wrapper" span={24}>
            {loadedComponent && <ComponentsWrapper component={loadedComponent} />}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

/* eslint-disable key-spacing */
import { Content, Footer, Header } from './../ant-modules';
import { TablaUsuarios } from './../components';

export const Usuarios = () => {
  return (
    <>
      <Header style={{ color: 'white' }}>Header</Header>
      <Content className="content-tabla">
        <TablaUsuarios></TablaUsuarios>
      </Content>
      <Footer className="color_texto">Footer</Footer>
    </>
  );
};

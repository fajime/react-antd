/* eslint-disable key-spacing */
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Content, Footer, Form, Header, Input, notification } from './../ant-modules';

import { loadUsers, login } from './../store/actions/authActions';
import { useAppDispatch } from './../hooks/useStore';

export const Login = () => {
  // const { logged, name, users } = useAppSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (values: any) => {
    const { name, remember } = values;

    // if (name === 'ad' && username === 'ad') {
    dispatch(loadUsers());
    dispatch(login(name, remember));
    navigate('/usuarios', { replace: true });
    // }
  };
  const handleFailed = () => {
    notification.open({
      message: 'Credenciales incorrectas',
      description: 'Inténtelo de nuevo...',
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  };

  return (
    <>
      <Header className="bgHeader" style={{ color: 'white' }}>
        <span>Header Login</span>
      </Header>
      <Content>
        <Form
          style={{ paddingRight: '10em', paddingTop: '10em' }}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          onFinishFailed={handleFailed}
          autoComplete="off"
        >
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="button" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer>FOOTER</Footer>
    </>
  );
};

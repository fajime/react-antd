/* eslint-disable key-spacing */
import { useNavigate } from 'react-router-dom';
import { Content, Form, Header, notification } from './../ant-modules';
import { DlButton, DlCheckbox, DlInput } from './../components/dl';

import { loadUsers, login } from './../store/actions/authActions';
import { useAppDispatch } from './../hooks/useStore';

export const Login = () => {
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
          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <DlInput />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <DlInput type="password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 24 }}>
            <DlCheckbox>Remember me</DlCheckbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 24 }}>
            <DlButton label="Hacer Login" htmlType="submit" />
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};

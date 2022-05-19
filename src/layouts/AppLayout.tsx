import { Footer, Layout } from './../ant-modules';
import { AppRoutes } from '../routes/Routes';
import { Menu } from '../components';

export const AppLayout = () => {
  return (
    <Layout className="app-layout">
      <Menu />
      <AppRoutes />
      <Footer>Footer</Footer>
    </Layout>
  );
};

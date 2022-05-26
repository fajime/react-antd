import { Route, Routes } from 'react-router-dom';
import { Canvas, Docs, Home, Login, Posts, Tools, Usuarios } from '../pages';
import { PrivatedRoute } from './PrivatedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="posts" element={<Posts />} />
      <Route path="home" element={<Home />}>
        <Route path="canvas" element={<Canvas />} />
        <Route path="docs" element={<Docs />} />
        <Route path="tools" element={<Tools />} />
      </Route>
      <Route
        path="usuarios"
        element={
          <PrivatedRoute>
            <Usuarios />
          </PrivatedRoute>
        }
      />
    </Routes>
  );
};

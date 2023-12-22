import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('components/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<div>Login</div>} />
          <Route path="register" element={<div>Register</div>} />
          <Route path="contacts" element={<div>Contacts</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

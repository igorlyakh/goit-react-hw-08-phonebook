import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="login" element={<div>Login</div>} />
        <Route path="register" element={<div>Register</div>} />
        <Route path="contacts" element={<div>Contacts</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};

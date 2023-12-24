import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/actions';
import { selectIsRefreshing } from '../redux/selectors';

const Layout = lazy(() => import('components/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={ContactsPage} />
              }
            />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
};

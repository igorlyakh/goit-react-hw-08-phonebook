import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';
import { LoginButton, LoginField, LoginForm } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, action) => {
      dispatch(logIn(values));
      action.resetForm();
    },
  });
  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <LoginField
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        name="email"
        required
        placeholder="Enter your email"
      />
      <LoginField
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
        required
        placeholder="Enter your password"
      />
      <LoginButton type="submit">Login</LoginButton>
    </LoginForm>
  );
};

export default LoginPage;

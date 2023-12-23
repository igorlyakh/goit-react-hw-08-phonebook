import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions';
import {
  RegisterButton,
  RegisterField,
  RegisterForm,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, action) => {
      dispatch(register(values));
      action.resetForm();
    },
  });
  return (
    <RegisterForm onSubmit={formik.handleSubmit}>
      <RegisterField
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <RegisterField
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <RegisterField
        type="password"
        name="password"
        placeholder="Enter your password"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <RegisterButton>Registration</RegisterButton>
    </RegisterForm>
  );
};

export default RegisterPage;

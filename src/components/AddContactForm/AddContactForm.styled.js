import styled from 'styled-components';

import {
  ErrorMessage as FormikError,
  Field as FormikField,
  Form as FormikForm,
} from 'formik';

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 400px;
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Field = styled(FormikField)`
  padding: 5px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

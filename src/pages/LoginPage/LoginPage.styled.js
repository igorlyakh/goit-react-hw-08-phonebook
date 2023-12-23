import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto 0 auto;
  gap: 10px;
`;

export const LoginField = styled.input`
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #ccc;
  }
`;

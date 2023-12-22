import styled from 'styled-components';

import { NavLink as RouterLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #282828;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 15px;
  align-items: center;
`;

export const NavLink = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  padding: 2px 8px 4px;
  &.active {
    color: #fff;
    border-radius: 5px;
    background-color: #585858;
  }
`;

export const UserName = styled.span`
  font-size: 20px;
  color: #fff;
`;

export const LogoutButton = styled.button`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  width: 100px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fff;
    color: #282828;
  }
`;

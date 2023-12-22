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

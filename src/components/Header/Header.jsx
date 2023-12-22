import { HeaderWrapper, MenuList, Nav, NavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <MenuList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </MenuList>
        <MenuList>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </MenuList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors';
import {
  HeaderWrapper,
  LogoutButton,
  MenuList,
  Nav,
  NavLink,
  UserName,
} from './Header.styled';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  return (
    <HeaderWrapper>
      <Nav>
        <MenuList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          )}
        </MenuList>
        {isLoggedIn ? (
          <MenuList>
            <li>
              <UserName>Welcome, {userName}!</UserName>
            </li>
            <li>
              <LogoutButton type="button">Logout</LogoutButton>
            </li>
          </MenuList>
        ) : (
          <MenuList>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </MenuList>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

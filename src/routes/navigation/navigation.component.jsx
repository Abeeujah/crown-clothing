// Import Fragment, Outlet, Link, CSS
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsOpen } from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

// Import Styled Components..
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

// Define Navigation Component..
const Navigation = () => {
  // Context API..
  const currentUser = useSelector(selectUser);
  const isOpen = useSelector(selectIsOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutAuthUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

// Export Navigation..
export default Navigation;

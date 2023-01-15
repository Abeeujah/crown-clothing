// Import useSelector, useNavigate..
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Import Button Component..
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

// Import Styled Components..
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

// Define CartDropdown Component..
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

// Export CartDropdown Component..
export default CartDropdown;

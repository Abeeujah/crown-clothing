// Import useContext..
import { useContext } from "react";

// Import CartContext..
import { CartContext } from "../../contexts/cart.context";

// Import SCSS, SVG..
import { ReactComponent as ShopBag } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

// Define CartIcon Component..
const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  // Create Toggler Function..
  const cartToggle = () => setIsOpen(!isOpen);

  return (
    <CartIconContainer onClick={cartToggle} >
      <ShopBag className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

// Export CartIcon Component..
export default CartIcon;

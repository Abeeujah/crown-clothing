// Import useSelector, useDispatch..
import { useSelector, useDispatch } from "react-redux";

// Import Cart Selector..
import { selectIsOpen, selectCartCount } from "../../store/cart/cart.selector.js"
import { setIsOpen } from "../../store/cart/cart.reducer.js";

// Import SCSS, SVG..
import { ReactComponent as ShopBag } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

// Define CartIcon Component..
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isOpen = useSelector(selectIsOpen);

  // Create Toggler Function..
  const cartToggle = () => dispatch(setIsOpen(!isOpen));

  return (
    <CartIconContainer onClick={cartToggle} >
      <ShopBag className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

// Export CartIcon Component..
export default CartIcon;
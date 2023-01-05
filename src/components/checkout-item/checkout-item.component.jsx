// Import UseContext..
import { useContext } from "react";

// Import CartContext..
import { CartContext } from "../../contexts/cart.context";

// Import Styled Components..
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx";

// Define CheckoutItem Component..
const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  //   Context API..
  const { removeCheckoutItem, addItemsToCart, removeItemsFromCart } =
    useContext(CartContext);

  // ClickHandler..
  const removeHandler = () => {
    removeCheckoutItem(cartItem);
  };

  const addItemHandler = () => {
    addItemsToCart(cartItem);
  };

  const reduceItemHandler = () => {
    removeItemsFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={reduceItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

// Export CheckoutItem Component..
export default CheckoutItem;

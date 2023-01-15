// Import UseContext..
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart, removeItemFromCheckout, removeItemsFromCart } from "../../store/cart/cart.reducer";



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

  // Dispatch from Dispatch API..
  const dispatch = useDispatch();

  // ClickHandler..
  const removeHandler = () => {
    dispatch(removeItemFromCheckout(cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItemsToCart(cartItem));
  };

  const reduceItemHandler = () => {
    dispatch(removeItemsFromCart(cartItem));
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

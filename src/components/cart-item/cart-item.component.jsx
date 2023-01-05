// Import Styled Components..
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

// Define CartItem Component..
const CartItem = ({ product }) => {
  const { name, price, imageUrl, quantity } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

// Export CartItem Component..
export default CartItem;

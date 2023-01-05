// Import useContext from react..
import { useContext } from "react";

// Import Button, CartContext..
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

// Import SCSS..
import {
  Name,
  Price,
  ProductCartContainer,
  Footer,
} from "./product-card.styles.jsx";

// Define Product Card Component..
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemsToCart } = useContext(CartContext);

  // OnClick Helper Function to add Items to Cart..
  const clickHandler = () => addItemsToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={clickHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

// Export Product Card..
export default ProductCard;

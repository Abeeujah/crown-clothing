// Import useDispatch from react-redux..
import { useDispatch } from "react-redux";

import { addItemsToCart } from "../../store/cart/cart.reducer";

// Import Button..
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

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

  const dispatch = useDispatch();

  // OnClick Helper Function to add Items to Cart..
  const clickHandler = () => dispatch(addItemsToCart(product));

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

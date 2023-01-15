// Import useContext, useState and useEffect..
import { useContext, useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";

// Import useParams..
import { useParams } from "react-router-dom";

// Import CategoriesContext..
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategories } from "../../store/categories/categories.selector";

// Import Styled Components..
import { CategoryContainer, Title } from "./category.styles";

// Define Category Component..
const Category = () => {
  const categoriesMap = useSelector(selectCategories);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <Title>{category.toLocaleUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

// Export Category Component..
export default Category;

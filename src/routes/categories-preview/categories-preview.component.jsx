// Import useContext..
import { Fragment, useContext } from "react";

// Import CategoriesContext..
import { CategoryContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

// Define CategoriesPreview Component..
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

// Export CategoriesPreview Component..
export default CategoriesPreview;

// Import useContext..
import { Fragment, useContext } from "react";

// Import Categories From Reducers..
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

// Define CategoriesPreview Component..
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
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

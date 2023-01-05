// Import Routes and Route from react-router-dom..
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

// Define Shop Component..
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

// Export Shop Component..
export default Shop;
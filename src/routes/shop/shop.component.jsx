// Import Routes and Route from react-router-dom..
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { categorize } from "../../store/categories/categories.reducer";

// Define Shop Component..
const Shop = () => {
  const dispatch = useDispatch();
  // Mount Categories on Load..
  useEffect(() => {
    const getDocuments = async () => {
      const categories = await getCategoriesAndDocuments('categories');
      console.log(categories);
      dispatch(categorize(categories));
    }
    getDocuments();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

// Export Shop Component..
export default Shop;
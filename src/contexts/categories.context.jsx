// Import useState, createContext Hooks..
import { useState, createContext, useEffect } from "react";

// Import Write to DB utility function..
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Create Category Context..
export const CategoryContext = createContext({
  categoriesMap: {},
});

// Category Provider..
export const CategoryProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    const value = { categoriesMap };

    // Mount Categorys on Load..
    useEffect(() => {
      const getDocuments = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      }
      getDocuments();
    }, []);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

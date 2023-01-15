// Memoize Using Create Selector..
import { createSelector } from "@reduxjs/toolkit";

// Select the Reducer off State..
// Select the Value off the Reducer..
// Return the Initial Value..

// Get the Categories Reducer off State.
const categoriesReducer = (state) => (state.category);

// Create Categories Selector..
export const selectCategory = createSelector(
    [categoriesReducer],
    (categoriesSlice) => (categoriesSlice.categories)
);

export const selectCategories = createSelector(
    [selectCategory],
    (categories) => (categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {}))
);

// export const selectCategories = (state) => {
//     return (state.category.categories.reduce((acc, category) => {
//         const { title, items } = category;
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {}));
// }
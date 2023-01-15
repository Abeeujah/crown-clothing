// Config Details..
import { createSlice } from "@reduxjs/toolkit";

// Create Categoryy Slice..
export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: []
    },
    reducers: {
        categorize: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                categories: payload
            }
        }
    }
});

// Export Actions and Reducer..
export const { categorize } = categorySlice.actions;

export default categorySlice.reducer;
// Config Details..
import { createSlice } from "@reduxjs/toolkit";

// User Slice..
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
    },
    reducers: {
        userReducered: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                currentUser: payload
            }
        }
    }
});

// Export Actions and Reducer..
export const { userReducered } = userSlice.actions;

export default userSlice.reducer;
// Config Details..
import { createSlice } from "@reduxjs/toolkit";

// Helper Function to add and increment cart items..
const addItemToCart = (cartItems, productToAdd) => {
    // Search through cartItems for the productToAdd..
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // If Found, Increment Quantity..
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // Return All Items in Cart..
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Helper Function to remove items from cart..
const removeItemFromCart = (cartItems, productToRemove) => {
    // Find The Product..
    const existingProduct = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    // Check Quantity..
    if (existingProduct.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    // Remove the Product..
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

// Explicitly remove item..
const removeCheckout = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

// Cart Slice..
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isOpen: false,
        cartItems: []
    },
    reducers: {
        updateCart: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                cartItems: payload
            };
        },
        setIsOpen: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                isOpen: payload
            };
        },
        addItemsToCart: (state, action) => {
            const { cartItems } = state;
            const { payload } = action;
            const newCartItems = addItemToCart(cartItems, payload);
            return {
                ...state,
                cartItems: newCartItems
            };
        },
        removeItemsFromCart: (state, action) => {
            const { cartItems } = state;
            const { payload } = action;
            const newCartItems = removeItemFromCart(cartItems, payload);
            return {
                ...state,
                cartItems: newCartItems
            };
        },
        removeItemFromCheckout: (state, action) => {
            const { cartItems } = state;
            const { payload } = action;
            const newCartItems = removeCheckout(cartItems, payload);
            return {
                ...state,
                cartItems: newCartItems
            };
        },
    }
});

// Export Reducers/Actions..
export const { updateCart, setIsOpen, addItemsToCart, removeItemsFromCart, removeItemFromCheckout } = cartSlice.actions;

export default cartSlice.reducer;
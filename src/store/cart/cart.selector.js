// Import createSelector to Memoize State Updates..
import { createSelector } from "@reduxjs/toolkit";

// Pull Off Cart From State..
const leCartItems = (state) => (state.cart.cartItems);
const leCartIsOpen = (state) => (state.cart.isOpen);

// Pull Off CartItems and Cart isOpen from selectCart..
export const selectCartItems = createSelector(
    [leCartItems],
    (cartItems) => (cartItems)
);

export const selectIsOpen = createSelector(
    [leCartIsOpen],
    (isOpen) => (isOpen)
);

export const selectCartCount = createSelector(
    [leCartItems],
    (cartItems) => (cartItems.reduce((total, cartItem) => {
        const { quantity } = cartItem;
        return (total + quantity);
    }, 0))
);

export const selectCartTotal = createSelector(
    [leCartItems],
    (cartItems) => (cartItems.reduce((total, cartItem) => {
        const { quantity, price } = cartItem;
        return (total + (quantity * price));
    }, 0))
);
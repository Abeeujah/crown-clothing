// Import useState and createContext from React..
import { createContext, useState, useEffect, useReducer } from "react";

// Utility Function..
import { createAction } from "../utils/reducer/reducer.utils";

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

// Create Cart Context..
export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  removeCheckoutItem: () => {},
  cartCount: 0,
  cartTotal: 0,
});

// Cart Initial State..
const initialState = {
  isOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// Cart Action Types..
const actionTypes = {
  UPDATE_CART: "UPDATE_CART",
  TOGGLE_CART: "TOGGLE_CART"
};

// Cart Reducer..
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch(type) {
    case actionTypes.UPDATE_CART:
      return {
        ...state,
        ...payload
      };

    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        isOpen: payload
      };

    default:
      throw new Error(`Unhandled Type ${type}`);
  }
}

// CartContext Provider..
export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isOpen }, dispatch] = useReducer(cartReducer, initialState);

  // Update Cart State..
  const updateCartReducer = (cartItems) => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      const { quantity } = cartItem;
      return total + quantity;
    }, 0);

    const newCartTotal = cartItems.reduce((total, cartItem) => {
      const { quantity, price } = cartItem;
      return total + (quantity * price);
    }, 0);

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch(createAction(actionTypes.UPDATE_CART, payload));
  };

  const setIsOpen = (toggle) => {
    return dispatch(createAction(actionTypes.TOGGLE_CART, toggle));
  };

  // Add Items To Cart..
  const addItemsToCart = (productToAdd) => {
    const newCartItems = (addItemToCart(cartItems, productToAdd));
    updateCartReducer(newCartItems);
  };

  // Remove Items From Cart..
  const removeItemsFromCart = (productToRemove) => {
    const newCartItems = (removeItemFromCart(cartItems, productToRemove));
    updateCartReducer(newCartItems);
  };

  const removeCheckoutItem = (productToRemove) => {
    const newCartItems = (removeCheckout(cartItems, productToRemove));
    updateCartReducer(newCartItems);
  };
  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemsToCart,
    cartCount,
    removeItemsFromCart,
    removeCheckoutItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

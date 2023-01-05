// Import useState and createContext from React..
import { createContext, useState, useEffect } from "react";

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

// CartContext Provider..
export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Update Cart Items Count using useEffect..
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  // Update Cart Items Count using useEffect..
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      const { quantity, price } = cartItem;
      return total + quantity * price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  // Add Items To Cart..
  const addItemsToCart = (productToAdd) => {
    setCartItems(addItemToCart(cartItems, productToAdd));
  };

  // Remove Items From Cart..
  const removeItemsFromCart = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove));
  };

  const removeCheckoutItem = (productToRemove) => {
    setCartItems(removeCheckout(cartItems, productToRemove));
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

import React, { createContext, useState } from 'react';
import productsData from './data.json'; // Import the JSON data

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(productsData.products.map(product => ({ ...product, quantity: 1 })));

  const addToCart = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    } else {
      // Remove the item from the cart
      removeFromCart(itemId);
    }
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

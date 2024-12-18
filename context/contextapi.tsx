import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartItem {
  name: string;
  detail: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  incrementQuantity: (name: string) => void;
  decrementQuantity: (name: string) => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  // Increment quantity
  const incrementQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrementQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

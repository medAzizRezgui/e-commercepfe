import { createContext, ReactNode, useContext, useState } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
};

type CartContextValue = {
  cartItems: CartItem[];
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (itemId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem, quantity: number) => {
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
      const updatedItems = cartItems.map((i) =>
        i.id === item.id ? updatedItem : i
      );
      setCartItems(updatedItems);
    } else {
      const newItem = {
        ...item,
        quantity,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeItem = (itemId: string, quantity: number) => {
    const existingItem = cartItems.find((i) => i.id === itemId);

    if (existingItem) {
      if (existingItem.quantity > quantity) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - quantity,
        };
        const updatedItems = cartItems.map((i) =>
          i.id === itemId ? updatedItem : i
        );
        setCartItems(updatedItems);
      } else {
        const updatedItems = cartItems.filter((i) => i.id !== itemId);
        setCartItems(updatedItems);
      }
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue: CartContextValue = {
    cartItems,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

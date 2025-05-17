import { create } from 'zustand';
import type { TProduct } from '../types/product';

/**
 * useCart is a Zustand store for managing the shopping cart state.
 * It provides functions to add, remove, and clear items in the cart.
 * @returns {CartState} The cart state and actions.
 */

type CartItem = TProduct & { quantity: number };
type CartState = {
  items: CartItem[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));

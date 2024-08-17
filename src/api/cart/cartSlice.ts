import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../product/productsApi';

interface CartState {
  items: Record<number, number>;
  products: Record<number, Product>; 
}

const initialState: CartState = {
  items: {},
  products: {}, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.items[product.id] = (state.items[product.id] || 0) + 1;
      state.products[product.id] = product;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]--;
        if (state.items[id] === 0) {
          delete state.items[id];
          delete state.products[id];
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
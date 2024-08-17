import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/api/auth/authSlice';
import animeReducer from '@/api/anime/animeSlice';
import { productsApi } from '@/api/product/productsApi';
import cartReducer from '@/api/cart/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    anime: animeReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


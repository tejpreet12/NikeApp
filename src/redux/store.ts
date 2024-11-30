import {configureStore} from '@reduxjs/toolkit';
import { productSlice } from './slices/product/productSlice';
import cartSlice from './slices/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

 import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/redux/features/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/redux/features/productSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, productReducer);
export const store = configureStore({
  reducer: {
    product: persistedReducer, 
  },
});

export const persistor = persistStore(store);

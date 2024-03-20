import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import productListSlice from '../features/product-list/productListSlice';
import { ProductListApi } from '../features/product-list/productListApi';

export const store = configureStore({
  reducer: {
    product: productListSlice,
    
  },
  applyMiddleware:{ProductListApi}
});

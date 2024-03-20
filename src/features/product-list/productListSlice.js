import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddToCartApi, CartListApi, ProductListApi, RemoveCartApi} from './productListApi';
import { ProductListFilterApi } from './productListApi';
const initialState = {
 products: [],
 cart:[],
  
};


export const productListAsync = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await ProductListApi();
  
    return response.data;
  }
);

export const productFilterAsync = createAsyncThunk(
  'product/productFilter',
  async (queryString) => {
    const response = await ProductListFilterApi(queryString);
  
    return response.data;
  }
);

export const addToCartAsync = createAsyncThunk(
  'product/addToCart',
  async (item) => {
    const response = await AddToCartApi(item);
  
    return response.data;
  }
);

export const cartListAsync = createAsyncThunk(
  'product/cartList',
  async () => {
    const response = await CartListApi();
  
    return response.data;
  }
);

export const removeCartAsync = createAsyncThunk(
  'product/removeCart',
  async (id) => {
    const response = await RemoveCartApi(id);
  
    return response.data;
  }
);


export const productListSlice = createSlice({
  name: 'product',
  initialState,
 
  reducers: {
  increment:(state)=>{
    state.state='increment'
  }
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(productListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products =[ ...action.payload];
      })
      .addCase(productFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products =[ ...action.payload];
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart = [...state.cart,action.payload];
      })
      .addCase(cartListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart = [...action.payload];
      })
      .addCase(removeCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart = state.cart;
      })
  },
});

export const { increment, } = productListSlice.actions;



export default productListSlice.reducer;

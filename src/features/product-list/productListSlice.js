import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductListApi} from './productListApi';
import { ProductListFilterApi } from './productListApi';
const initialState = {
 products: [],
  
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
      });
  },
});

export const { increment, } = productListSlice.actions;



export default productListSlice.reducer;

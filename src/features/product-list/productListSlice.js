import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddToCartApi, AddressApi, BestRatingApi, CartListApi, CreateUserApi, DecrementItemApi, GetAddressApi, GetOrderApi, IncrementItemApi, LoginUserApi, OrderApi, PriceHeighToLowApi, PriceLowToHeighApi, ProductListApi, RemoveCartApi} from './productListApi';
import { ProductListFilterApi } from './productListApi';
const initialState = {
 products: [],
 cart:[],
 user:[],
 loggedInUser:[],
 address:[],
 order:[]

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
  async (userId) => {
    const response = await CartListApi(userId);
  
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

export const incrementItemAsync = createAsyncThunk(
  'product/incrementItem',
  async (item) => {
    const response = await IncrementItemApi(item);
  
    return response.data;
  }
);

export const decrementItemAsync = createAsyncThunk(
  'product/decrementItem',
  async (item) => {
    const response = await DecrementItemApi(item);
  
    return response.data;
  }
);

export const priceHeighToLowAsync = createAsyncThunk(
  'product/heighToLow',
  async () => {
    const response = await PriceHeighToLowApi();
  
    return response.data;
  }
);

export const priceLowToHeighAsync = createAsyncThunk(
  'product/lowToHeigh',
  async () => {
    const response = await PriceLowToHeighApi();
  
    return response.data;
  }
);

export const bestRatingAsync = createAsyncThunk(
  'product/bestRating',
  async () => {
    const response = await BestRatingApi();
  
    return response.data;
  }
);

export const createUserAsync = createAsyncThunk(
  'product/createUser',
  async (userData) => {
    const response = await CreateUserApi(userData);
  
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  'product/loginUser',
  async (userData) => {
    const response = await LoginUserApi(userData);
  
    return response.data;
  }
);

export const addressAsync = createAsyncThunk(
  'product/address',
  async (userData) => {
    const response = await AddressApi(userData);
  
    return response.data;
  }
);

export const getAddressAsync = createAsyncThunk(
  'product/getAddress',
  async (userId) => {
    const response = await GetAddressApi(userId);
  
    return response.data;
  }
);

export const orderAsync = createAsyncThunk(
  'product/order',
  async (orderData) => {
    const response = await OrderApi(orderData);
  
    return response.data;
  }
);

export const getOrderAsync = createAsyncThunk(
  'product/getOrder',
  async (userId) => {
    const response = await GetOrderApi(userId);
  
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: 'product',
  initialState,
 
  reducers: {
  increment:(state)=>{
    state.state='increment'
  },
  
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
      .addCase(incrementItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart = state.cart
      })
      .addCase(decrementItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart = state.cart;
      })
      .addCase(priceLowToHeighAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(priceHeighToLowAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(bestRatingAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
        state.loggedInUser = action.payload;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(addressAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.address.push(action.payload);
        
      })
      .addCase(getAddressAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.address=action.payload;
        
      })
      .addCase(orderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.order.push(action.payload);
      })
      .addCase(getOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.order = action.payload;
      })
  },
});

export const { addAddress } = productListSlice.actions;



export default productListSlice.reducer;

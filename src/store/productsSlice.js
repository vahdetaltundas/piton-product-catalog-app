import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  product:{},
  loadingProducts: false,
  error: null,
};

export const fetchProductByCategory = createAsyncThunk(
  'products/fetchProductByCategory',
  async (id) => {
    const response = await axios.get(
      `https://assign-api.piton.com.tr/api/rest/products/${id}`
    );
    return response.data.product;
  }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async (productId) => {
    const response = await axios.get(`https://assign-api.piton.com.tr/api/rest/product/${productId}`);
    return response.data.product_by_pk;
  }
);


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToBook: (state, action) => {
      
      state.product=action.payload
    }
  },
  extraReducers: (builder) => {
    //categories loading states
    builder
      .addCase(fetchProductByCategory.pending, (state) => {
        state.loadingProducts = true;
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loadingProducts = false;
      })
      .addCase(fetchProductByCategory.rejected, (state, action) => {
        state.loadingProducts = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { addToBook } = productsSlice.actions;
export default productsSlice.reducer;
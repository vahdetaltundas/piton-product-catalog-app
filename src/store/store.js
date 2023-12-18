import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categoriesSlice';
import productsReducer from './productsSlice';


export const store = configureStore({
    reducer: {
      categories:categoryReducer,
      products:productsReducer
    },
  });
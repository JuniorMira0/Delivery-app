import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './userProducts';

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import userProducts from './userProducts';

export default configureStore({
  reducer: {
    user: userReducer,
    products: userProducts,
  },
});

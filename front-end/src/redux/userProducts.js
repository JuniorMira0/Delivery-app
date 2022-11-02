import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const userSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    actionAddProduct(state, { payload }) {
      return [...state, payload];
    },
    actionUpdateProduct(_state, { payload }) {
      return payload;
    },
  },
});

export const { actionAddProduct, actionUpdateProduct } = userSlice.actions;

export const selectProduct = (state) => state.products;

export default userSlice.reducer;

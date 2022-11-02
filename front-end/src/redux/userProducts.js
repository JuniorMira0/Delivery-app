import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    actionAddProduct(state, { payload }) {
      return [...state, payload];
    },
    actionUpdateProduct(_state, { payload }) {
      return payload;
    },
    actionRemoveItem(state, index) {
      const newState = state.findIndex((i) => i !== index);
      return { ...newState };
    },
  },
});

export const { actionAddProduct, actionUpdateProduct } = productsSlice.actions;

export const selectProduct = (state) => state.products;

export default productsSlice.reducer;

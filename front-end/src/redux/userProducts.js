import { createSlice, current } from '@reduxjs/toolkit';

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
    actionRemoveItem(state, { payload }) {
      const newState = current(state).filter((_prod, i) => i !== payload);
      return [...newState];
    },
  },
});

export const { actionAddProduct,
  actionUpdateProduct, actionRemoveItem } = productsSlice.actions;

export const selectProduct = (state) => state.products;

export default productsSlice.reducer;

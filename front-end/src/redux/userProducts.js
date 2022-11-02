import { createSlice } from '@reduxjs/toolkit';

const produtcsMock = [
  { name: 'produto 1', qtd: 2, price: 2.5 },
  { name: 'produto 2', qtd: 1, price: 1.5 },
  { name: 'produto 3', qtd: 2, price: 3.5 },
];

const INITIAL_STATE = [...produtcsMock];

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    actionProduct(state, { payload }) {
      return { ...state, payload };
    },
    actionRemoveItem(state, index) {
      const newState = state.findIndex((i) => i !== index);
      return { ...newState };
    },
  },
});

export const { actionProduct, actionRemoveItem } = productsSlice.actions;

export const selecProduct = (state) => state.products;

export default productsSlice.reducer;

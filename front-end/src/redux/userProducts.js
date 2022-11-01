import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [{
  name: '',
  price: 0,
  urlImage: '',
}];

export const userSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    actionProduct(state, { payload }) {
      return { ...state, payload };
    },
  },
});

export const { actionProduct } = userSlice.actions;

export const selecProduct = (state) => state.products;

export default userSlice.reducer;

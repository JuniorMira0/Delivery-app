import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
  email: '',
  role: '',
  token: '',
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    actionUserLogin(state, { payload }) {
      return { ...state, isLogged: true, user: payload };
    },
    actionLogout(state) {
      return { ...state, ...INITIAL_STATE };
    },
  },
});

export const { actionUserLogin, actionLogout } = userSlice.actions;

export const selectUser = (state) => state.user.name;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;

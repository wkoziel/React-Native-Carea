import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   email: '',
   isAuth: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, actions) => {
         const { email } = actions.payload;
         state.email = email;
         state.isAuth = true;
      },
      logout: (state) => {
         state.email = '';
         state.isAuth = false;
      },
   },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

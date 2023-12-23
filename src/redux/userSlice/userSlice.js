import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from '../actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    userEmail: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.userName = null;
        state.userEmail = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const userReducer = userSlice.reducer;

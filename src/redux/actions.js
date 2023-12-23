import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeaderToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeaderToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setHeaderToken(res.data.token);
      return res.data;
    } catch {
      return rejectWithValue('Email is already in use');
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setHeaderToken(res.data.token);
      return res.data;
    } catch {
      return rejectWithValue('Invalid email or password');
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearHeaderToken();
    } catch {
      return rejectWithValue('Something went wrong');
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().user;
    if (!token) {
      return thunkAPI.rejectWithValue('error');
    }

    setHeaderToken(token);

    try {
      const res = await axios('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

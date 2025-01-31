import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { api } from '../../services/api';

export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/user/login', {
      email: email,
      password: password,
    });

    response?.data && toast.success('Login successful!');

    return response?.data?.data;
  } catch (error) {
    const errMsg = error.response.data.message || error.message;

    toast.error(errMsg || 'Invalid Email or Password!');

    console.error('An error occurred', error);
    return rejectWithValue(errMsg);
  }
});

import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions';

export const loadTokenFromStorage = () => {
  return localStorage.getItem('token');
};

export const loadUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const saveTokenToStorage = (token) => {
  localStorage.setItem('token', `Bearer ${token}`);
};

const saveUserToStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const initialState = {
  user: loadUserFromStorage() || null,
  token: loadTokenFromStorage() || '',
  isSignedIn: !!loadTokenFromStorage(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isSignedIn = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      saveTokenToStorage(payload.token);
      saveUserToStorage(payload.user);
      state.loading = false;
      state.isSignedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;

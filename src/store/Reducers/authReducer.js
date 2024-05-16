import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info) => {
    console.log(info);
    try {
      const { data } = await api.post('/admin-login', info, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
  },
  reducers: {},
  extraReducers: () => {},
});

export default authReducer.reducer;

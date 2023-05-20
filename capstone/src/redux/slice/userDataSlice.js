import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('data/fetchUserData', async (jwt) => {
  const response = await axios.get('https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/user/order', {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return response.data;
});

const userDataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: true,
    userData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchUserData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        userData: action.payload,
      }))
      .addCase(fetchUserData.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      }));
  },
});

export default userDataSlice.reducer;

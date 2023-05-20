import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUnivData = createAsyncThunk('data/fetchUnivData', async (params, thunkAPI) => {
  let { univ, jwt } = params;
  const response = await axios.get(`https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/order/statistics?university=${univ}`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return [...response.data];
});

const univDataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: true,
    univData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnivData.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchUnivData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        univData: action.payload,
      }))
      .addCase(fetchUnivData.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      }));
  },
});

export default univDataSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMonthData = createAsyncThunk('data/fetchMonthData', async (params, thunkAPI) => {
  let { univ, jwt } = params;
  let university = ['공학대학', '소프트웨어융합대학', '약학대학', '과학기술융합대학', '국제문화대학', '언론정보대학', '디자인대학', '예체능대학', '경상대학'];
  let monthlyAllDataLen = [];
  let monthlyUnivDataLen = [];
  const date = new Date();
  const curMonth = date.getMonth() + 1;
  for (let month = 1; month < curMonth + 1; month++) {
    let monthlyData = [];
    for (let j = 0; j < university.length; j++) {
      await axios
        .get(`https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/order/statistics?year=2023&month=${month}&university=${university[j]}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((res) => {
          monthlyData.push(...res.data);
        });
    }
    monthlyAllDataLen.push(monthlyData.length);
  }

  for (let month = 1; month < curMonth + 1; month++) {
    await axios
      .get(`https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/order/statistics?year=2023&month=${month}&university=${univ}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        monthlyUnivDataLen.push(res.data.length);
      });
  }
  return [monthlyAllDataLen, monthlyUnivDataLen];
});

const monthDataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: true,
    monthData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonthData.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMonthData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        monthData: action.payload,
      }))
      .addCase(fetchMonthData.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      }));
  },
});

export default monthDataSlice.reducer;

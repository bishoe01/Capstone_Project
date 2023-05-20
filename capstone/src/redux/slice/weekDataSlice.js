import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeekData = createAsyncThunk('data/fetchWeekData', async (jwt) => {
  const timeshareCalc = (data) => {
    const time = new Array(16).fill(0);

    for (let i = 0; i < data.length; i++) {
      for (let j = data[i].startTime; j < data[i].endTime; j += 0.5) {
        time[Math.floor(j) - 9]++;
      }
    }
    return time;
  };
  const day = [
    [], // 평일
    [], // 주말
  ];
  for (let dow = 1; dow < 8; dow++) {
    await axios
      .get(`https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/order/statistics?year=2023&dayofweek=${dow}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        if (dow === 1 || dow === 7) {
          day[1].push(...res.data);
        } else {
          day[0].push(...res.data);
        }
      });
  }
  let weekdayTimeshare = timeshareCalc(day[0]);
  let weekendTimeshare = timeshareCalc(day[1]);
  return [weekdayTimeshare, weekendTimeshare];
});

const weekDataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: true,
    weekData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeekData.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchWeekData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        weekData: action.payload,
      }))
      .addCase(fetchWeekData.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      }));
  },
});

export default weekDataSlice.reducer;

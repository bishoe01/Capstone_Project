import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllData = createAsyncThunk('data/fetchAllData', async (params) => {
  const { url, jwt } = params;
  let university = ['공학대학', '소프트웨어융합대학', '약학대학', '과학기술융합대학', '국제문화대학', '언론정보대학', '디자인대학', '예체능대학', '경상대학'];
  const result = [];
  for (let i = 0; i < university.length; i++) {
    await axios
      .get(`https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app${url}${university[i]}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        result.push(...res.data);
      });
  }
  return result;

  // function refineData(input, key) {
  //   return input.reduce((result, item) => {
  //     const itemKey = item['building'] + '-' + item[key];
  //     if (!result[itemKey]) {
  //       result[itemKey] = 0;
  //     }
  //     result[itemKey]++;
  //     return result;
  //   }, {});
  // }

  // let refined = refineData(result, 'studyRoomName');
  // let sorted = Object.entries(refined).sort((a, b) => b[1] - a[1]);

  // let resultCategories = [];
  // let resultSeries = [];
  // for (let element of sorted) {
  //   console.log(element);
  //   resultCategories.push(element[0]);
  //   resultSeries.push(element[1]);
  // }

  // return [resultCategories.slice(0, 5), resultSeries.slice(0, 5)];
});

// 데이터 관련 상태와 액션을 정의하는 Slice 생성
const allDataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: true,
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchAllData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        allData: action.payload,
      }))
      .addCase(fetchAllData.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      }));
  },
});

export default allDataSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import allReducer from './slice/allDataSlice';
import univReducer from './slice/univDataSlice';
import weekReducer from './slice/weekDataSlice';
import monthReducer from './slice/monthDataSlice';
import userReducer from './slice/userDataSlice';

const store = configureStore({
  reducer: {
    allData: allReducer,
    univData: univReducer,
    weekData: weekReducer,
    monthData: monthReducer,
    userData: userReducer,
  },
});

export default store;

import React from 'react';

import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import AngleCircleChart from '../charts/AngleCircleChart';
import ChartInfo from './ChartInfo';

function ChartLayout(props) {
  return (
    <>
      <div className='w-full p-60 text-center'>Reservation Status</div>

      <BarChart />
      <LineChart />
      <div className='flex justify-between w-full'>
        <ChartInfo chartName={'인원별'} chartDescription={'우리 팀은 어디로 예약을 해야 할까요?'} />
        <div className='flex justify-center w-fll'>
          <AngleCircleChart />
          <AngleCircleChart />
          <AngleCircleChart />
        </div>
      </div>
    </>
  );
}

export default ChartLayout;

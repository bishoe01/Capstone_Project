import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';

function LineGraph() {
  const options = {
    chart: {
      height: 400,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      width: [5, 5],
      curve: 'straight',
      dashArray: [0, 6],
    },
    plotOptions: {},
    legend: {
      show: true,
      floating: false,
      fontSize: '14px',
      color: 'black',
      position: 'bottom',
      offsetX: 0,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },

    colors: ['#008FFB', '#FEB019'],
    labels: ['01 Jan', '02 Feb', '03 Mar', '04 Apr', '05 May', '06 Jun', '07 Jul', '08 Aug', '09 Sep', '10 Oct', '11 Nov', '12 Dev'],
    legend: {
      show: true,
      floating: false,
      fontSize: '14px',
      color: 'black',
      position: 'bottom',
      offsetX: 0,
      offsetY: 0,
    },
    toolbar: {
      show: false, // 다운로드 버튼 표시
    },
  };

  const series = [
    {
      name: 'Department',
      data: [2, 4, 12, 16, 25, 13, 2, 1, 15, 18, 23, 29],
    },
    {
      name: 'All',
      data: [11, 13, 98, 83, 36, 32, 15, 12, 43, 57, 69, 82],
    },
  ];
  const [chartData, setChartData] = useState(series);

  return (
    <div className='flex justify-between w-full'>
      <ChartInfo chartName={'월별'} chartDescription={'언제 가장 많이 예약했을까요?'} />
      <div className='w-full border-t-[3px] border-[#cdcdcd]'>
        <div className='chart'>
          <Chart options={options} series={chartData} type='line' height='400' />
        </div>
      </div>
    </div>
  );
}

export default LineGraph;

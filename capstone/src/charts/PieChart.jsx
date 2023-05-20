import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function PieChart({ data }) {
  const [chartData, setData] = useState([[], []]);

  function refineData(input, key) {
    return input.reduce((result, item) => {
      const itemKey = item[key];
      if (!result[itemKey]) {
        result[itemKey] = 0;
      }
      result[itemKey]++;
      return result;
    }, {});
  }

  useEffect(() => {
    let refined = refineData(data, 'studyRoomName');
    let sorted = Object.entries(refined).sort((a, b) => b[1] - a[1]);
    let resultLabel = [];
    let resultSeries = [];
    for (let element of sorted) {
      resultLabel.push(element[0]);
      resultSeries.push(element[1]);
    }
    setData([resultLabel.slice(0, 5), resultSeries.slice(0, 5)]);
  }, [data]);

  const options = {
    chart: {
      height: 350,
      type: 'pie',
      fontFamiliy: 'GmarketSansTTFMedium',
    },
    dataLabels: {
      style: {
        fontSize: '16px',
      },
    },

    colors: ['#ffc93c', '#0585cd', '#40a8c4', '#a2d5f2', '#d7edff'],
    labels: chartData[0],
    legend: {
      show: true,
      fontSize: '12px',
      fontFamily: 'main',
      color: 'black',
      position: 'bottom',
      offsetX: 0,
      offsetY: 0,
    },
  };

  return (
    <>
      <div className='flex flex-col items-center w-full py-4'>
        <h3 className='text-lg relative top-[-15px]'>팀플실별 예약율</h3>
        <div className='chart w-full pb-[60px]'>
          <Chart options={options} series={chartData[1]} type='pie' height='370' />
        </div>
      </div>
    </>
  );
}

export default PieChart;

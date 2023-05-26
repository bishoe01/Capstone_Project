import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function RadarChart({ data }) {
  const [chartData, setData] = useState([]);
  const [maxVal, setMaxVal] = useState(10);

  useEffect(() => {
    const ordersByWeekday = [
      [], // 일요일
      [], // 월요일
      [], // 화요일
      [], // 수요일
      [], // 목요일
      [], // 금요일
      [], // 토요일
    ];

    data.forEach((order) => {
      const orderDate = new Date(order.date);
      const weekday = orderDate.getDay(); // 0 (일요일)부터 6 (토요일)까지의 숫자를 반환
      ordersByWeekday[weekday].push(order);
    });
    let countArr = [];
    ordersByWeekday.map((arr) => countArr.push(arr.length));
    setData(countArr);
    setMaxVal(Math.max(countArr));
  }, [data]);

  const options = {
    chart: {
      height: 350,
      type: 'radar',
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      labels: {
        show: true,
        style: {
          fontSize: '16px',
          colors: ['#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c'],
        },
      },
    },
    yaxis: {
      max: 20,
      min: 0,
      tickAmount: 5,
    },

    colors: ['#004bf1'],
    // labels: ['101호', '102호', '103호', '104호'],
  };

  const series = [
    {
      name: '예약수',
      data: chartData,
    },
  ];

  return (
    <>
      <div className='flex flex-col items-center w-full py-4'>
        <h3 className='text-lg relative top-[20px]'>요일별 이용 횟수</h3>
        <div className='chart w-full'>
          <Chart options={options} series={series} type='radar' height='450' />
        </div>
      </div>
    </>
  );
}

export default RadarChart;

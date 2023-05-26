import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeekData } from '../redux/slice/weekDataSlice';
import Loading from '../components/Loading';

function AreaChart() {
  const dispatch = useDispatch();
  const { loading, weekData } = useSelector((state) => state.weekData);

  useEffect(() => {
    let JWT_TOKEN = localStorage.getItem('JWT');

    if (JWT_TOKEN !== null) {
      dispatch(fetchWeekData(JWT_TOKEN));
    }
  }, [dispatch]);

  const series = [
    {
      name: '평일',
      data: weekData[0],
    },
    {
      name: '주말',
      data: weekData[1],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    },
    yaxis: {
      tickAmount: 10,
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
    },
    legend: {
      show: true,
      fontFamily: 'GmarketSansTTFMedium',
      fontSize: '16px',
      color: 'black',
    },

    colors: ['#9974ff', '#377dff'],
  };

  return (
    <>
      <div className='flex flex-col justify-between w-full'>
        {!loading ? (
          <>
            <ChartInfo chartName={'특정 요일의 시간대별 점유율'} />
            <div className='w-full border-t-[0px] border-[#ececec] mb-[20px]'>
              <div className='chart'>
                <Chart options={options} series={series} type='area' height='330' />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col justify-around w-full h-14'>
              <div className='border-t-[3px] border-t-[#004C86] w-44' />
              <Loading w={'264px'} h={'32px'} />
            </div>
            <div className='w-full border-t-[3px] border-[#ececec] mb-[20px]'>
              <Loading w={'544px'} h={'330px'} />
            </div>
          </>
        )}
      </div>

      {/* <Loading w={'524px'} h={'424px'} /> */}
    </>
  );
}

export default AreaChart;

import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonthData } from '../redux/slice/monthDataSlice';
import Loading from '../components/Loading';

function LineGraph({ univ }) {
  const dispatch = useDispatch();
  const { loading, monthData } = useSelector((state) => state.monthData);

  useEffect(() => {
    let JWT_TOKEN = localStorage.getItem('JWT');
    if (JWT_TOKEN !== null) {
      dispatch(fetchMonthData({ univ: univ, jwt: JWT_TOKEN }));
    }
  }, [univ, dispatch]);

  const options = {
    chart: {
      height: 400,
      type: 'line',
      fontFamily: 'GmarketSansTTFMedium',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [5, 5],
      curve: 'straight',
      dashArray: [5, 0],
    },
    plotOptions: {},
    legend: {
      show: true,
      floating: false,
      fontSize: '14px',
      fontFamily: 'GmarketSansTTFMedium',
      color: 'black',
      position: 'bottom',
      offsetX: 0,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      showAlways: false,
    },
    xaxis: {
      labels: {
        style: {
          fontFamily: 'GmarketSansTTFMedium',
        },
      },
    },

    colors: ['#FEB019', '#008FFB'],
    labels: ['01 Jan', '02 Feb', '03 Mar', '04 Apr', '05 May', '06 Jun', '07 Jul', '08 Aug', '09 Sep', '10 Oct', '11 Nov', '12 Dev'],

    toolbar: {
      show: false, // 다운로드 버튼 표시
    },
  };

  const series = [
    {
      name: '전체',
      data: monthData[0],
    },
    {
      name: '단과대',
      data: monthData[1],
    },
  ];

  return (
    <>
      {!loading ? (
        <div className='flex flex-col justify-between w-full'>
          <ChartInfo chartName={'월별 예약 현황'} />
          <div className='w-full border-t-[3px] border-[#ececec]'>
            <div className='chart'>
              <Chart options={options} series={series} type='line' height='270' />
            </div>
          </div>
        </div>
      ) : (
        <Loading w={'524px'} h={'344px'} />
      )}
    </>
  );
}

export default LineGraph;

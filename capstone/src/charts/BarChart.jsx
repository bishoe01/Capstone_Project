import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';
import UserCount from './UserCount';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from '../redux/slice/allDataSlice';
import Loading from '../components/Loading';

function Rank({ categories }) {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    const refineData = async () => {
      let tmp = categories.slice(0, 3);

      let result = [];
      for (let i = 0; i < tmp.length; i++) {
        result.push(tmp[i].split('-'));
      }
      setRank(result);
    };
    refineData();
  }, [categories]);

  return (
    <>
      <div className='flex justify-center mt-4 ml-5 w-[790px]'>
        <div className=' w-[790px] max-w-[790px] h-32 bg-center bg-no-repeat bg-contain relative' style={{ backgroundImage: "url('/images/ranking.png')" }}>
          <div className='absolute top-12 left-12'>
            <span className='block text-2xl'>{rank[0] && rank[0][0]}</span>
            <span className='block text-2xl'>{rank[0] && rank[0][1]}</span>
          </div>
          <div className='absolute top-16 left-[390px]'>
            <span className='block text-base'>{rank[1] && rank[1][0]}</span>
            <span className='block text-base'>{rank[1] && rank[1][1]}</span>
          </div>
          <div className='absolute top-20 left-[660px]'>
            <span className='block text-xs'>{rank[2] && rank[2][0]}</span>
            <span className='block text-xs'>{rank[2] && rank[2][1]}</span>
          </div>
        </div>
      </div>
    </>
  );
}

function BarGraph() {
  const [chartData, setData] = useState([]);
  const [maxVal, setMaxVal] = useState(100);
  const dispatch = useDispatch();

  const { loading, allData } = useSelector((state) => state.allData);

  function setMax(maximumVal) {
    const roundUpToTens = (number) => {
      console.log('number: ' + number);
      if (number % 10 >= 1) {
        number = Math.ceil(number / 10) * 10;
      }
      return number;
    };
    if (maximumVal <= 100) return setMaxVal(100);
    else {
      setMaxVal(roundUpToTens(maximumVal));
    }
  }

  function refineData(input, key) {
    return input.reduce((result, item) => {
      const itemKey = item['building'] + '-' + item[key];
      if (!result[itemKey]) {
        result[itemKey] = 0;
      }
      result[itemKey]++;
      return result;
    }, {});
  }

  useEffect(() => {
    if (chartData.length > 0) return;
    let JWT_TOKEN = localStorage.getItem('JWT');

    if (JWT_TOKEN !== null) {
      dispatch(fetchAllData({ url: '/api/order/statistics?university=', jwt: JWT_TOKEN }));
    }

    if (allData.length > 0) {
      let refined = refineData(allData, 'studyRoomName');
      let sorted = Object.entries(refined).sort((a, b) => b[1] - a[1]);

      let resultCategories = [];
      let resultSeries = [];
      for (let element of sorted) {
        resultCategories.push(element[0]);
        resultSeries.push(element[1]);
      }
      setData([resultCategories.slice(0, 5), resultSeries.slice(0, 5)]);
    }
  }, [dispatch, allData, chartData.length]);

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        borderRadius: 12,
        dataLabels: {
          position: 'top',
        },
      },
    },
    colors: ['#b3cfe9', '#b3cfe9', '#b3cfe9', '#e3e3e3', '#e3e3e3'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
      },
      offsetX: -10,
    },
    xaxis: {
      categories: chartData[0],
      tickAmount: maxVal / 10,
      max: maxVal,
      axisBorder: {
        show: true,
        color: '#fff',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#e3e3e3',
        height: 200,
        offsetX: 62,
        offsetY: -200,
      },
    },
    grid: {
      show: false,
    },

    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: '예약수',
      data: chartData[1],
    },
  ];

  return (
    <>
      <div className='flex flex-col justify-between w-full'>
        {!loading && chartData.length > 0 ? (
          <>
            <ChartInfo chartName={'팀플실 예약 현황'} />
            <div className='w-full '>
              <Rank categories={chartData[0]} />
              <div className='chart w-[825px] '>
                <Chart options={options} series={series} type='bar' height='260' />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col justify-around w-full h-14'>
              <div className='border-t-[3px] border-t-[#004C86] w-44' />
              <Loading w={'176px'} h={'32px'} />
            </div>
            <div className='w-full border-t-[3px] border-sub'>
              <Loading w={'852px'} h={'420px'} />
            </div>
          </>
        )}
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <UserCount />
      </div>
    </>
  );
}

export default BarGraph;

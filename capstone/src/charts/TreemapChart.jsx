import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnivData } from '../redux/slice/univDataSlice';
import Loading from '../components/Loading';

function TreemapChart({ univ }) {
  const dispatch = useDispatch();
  const { loading, univData } = useSelector((state) => state.univData);
  const [chartData, setChartData] = useState([]);

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
    if (chartData.length > 0) return;
    let JWT_TOKEN = localStorage.getItem('JWT');
    if (JWT_TOKEN !== null) {
      dispatch(fetchUnivData({ univ: univ, jwt: JWT_TOKEN }));
    }

    if (univData.length > 0) {
      let refined = refineData(univData, 'studyRoomName');
      let sorted = Object.entries(refined).sort((a, b) => b[1] - a[1]);
      let resultChartData = [];

      for (let element of sorted) {
        resultChartData.push({ x: element[0], y: element[1] });
      }
      setChartData(resultChartData);
    }
  }, [dispatch, univData, univ, chartData.length]);

  const options = {
    chart: {
      height: 350,
      type: 'treemap',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      treemap: {
        show: true,
        distributed: true,
        enableShades: false,
      },
      dataLabels: {
        style: {
          fontSize: '24px',
        },
      },
    },
    colors: ['#6090cf', '#5376c1', '#a3b6df', '#5ecfb2', '#59b4cf', '#7cd3ec', '#77b6f6', '#8be0ee', '#58c5ff', '#77c6ff', '#82acfc', '#70e7c7', '#a1b5ff'],
  };

  const series = [
    {
      data: [...chartData],
    },
  ];

  return (
    <>
      <div className='flex flex-col justify-between w-full'>
        {!loading ? (
          <>
            <ChartInfo chartName={'단과대 팀플실별 이용 점유율'} />
            <div className='w-full border-t-[0px] border-[#ececec] mb-[50px]'>
              <div className='chart'>
                <Chart options={options} series={series} type='treemap' height='300' />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col justify-around w-full h-14'>
              <div className='border-t-[3px] border-t-[#004C86] w-44' />
              <Loading w={'264px'} h={'32px'} />
            </div>
            <div className='w-full border-t-[3px] border-[#ececec] mb-[50px]'>
              <Loading w={'554px'} h={'315px'} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TreemapChart;
